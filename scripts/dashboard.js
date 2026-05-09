
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>Dashboard</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<script type="module" src="scripts/guard.js"></script>

<div class="dashboard">
  <aside class="sidebar">
    <h2>ADMIN</h2>
    <ul>
      <li data-page="years">السنوات</li>
      <li data-page="subjects">المواد</li>
      <li data-page="chapters">الفصول</li>
      <li data-page="lectures">المحاضرات</li>
      <li data-page="exams">الامتحانات</li>
    </ul>
  </aside>

  <main class="content" id="content">
    <h1>مرحبا بك 👋</h1>
    <p>اختر قسم من القائمة</p>
  </main>
</div>

<script type="module" src="scripts/dashboard.js"></script>
</body>
</html>
