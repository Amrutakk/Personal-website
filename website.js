  function toggleLoginPopup() {
    const popup = document.getElementById("login-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  }

  function openDevLogin() {
    toggleLoginPopup();
    document.getElementById("dev-popup").style.display = "block";
  }

  function closeDevLogin() {
    document.getElementById("dev-popup").style.display = "none";
  }

  function userLogin() {
    alert("✅ User logged in!");
  }

  function userLogout() {
    alert("👋 User logged out!");
  }

  function verifyDev() {
    const id = document.getElementById("devId").value;
    const pass = document.getElementById("devPass").value;

    if (id === "admin" && pass === "admin123") {
      alert("✅ Developer access granted!");
      window.location.href = "developer-dashboard.html";
    } else {
      alert("⚠️ You are not a developer.");
    }
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
