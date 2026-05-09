
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFrf9kRQez8ltkvd66_BQZPmARc1fW6y8",
  authDomain: "date-student.firebaseapp.com",
  databaseURL: "https://date-student-default-rtdb.firebaseio.com",
  projectId: "date-student",
  storageBucket: "date-student.firebasestorage.app",
  messagingSenderId: "952213529741",
  appId: "1:952213529741:web:7a8d8da275214b5754eec4",
  measurementId: "G-CNR9HYEGGF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
