
<script type="module">
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorBox = document.getElementById("error");

loginBtn.onclick = async () => {
  errorBox.textContent = "";

  try {
    const userCred = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const uid = userCred.user.uid;

    // جلب بيانات المستخدم
    const snap = await getDoc(doc(db, "users", uid));

    if (!snap.exists()) {
      throw new Error("لا يوجد حساب مرتبط");
    }

    const userData = snap.data();

    localStorage.setItem("user", JSON.stringify({
      uid,
      role: userData.role,
      yearId: userData.yearId || null
    }));

    // توجيه حسب الدور
    if (userData.role === "admin") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "index.html";
    }

  } catch (err) {
    errorBox.textContent = "❌ بيانات الدخول غير صحيحة";
  }
};
</script>
