
<script type="module">
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

// لو طالب دخل dashboard
if (location.pathname.includes("dashboard") && user.role !== "admin") {
  window.location.href = "index.html";
}
</script>
