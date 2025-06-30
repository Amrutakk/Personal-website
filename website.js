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

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
      if (
        mobileNav.classList.contains('show') &&
        !mobileNav.contains(e.target) &&
        !menuIcon.contains(e.target)
      ) {
        mobileNav.classList.remove('show');
      }
    });
