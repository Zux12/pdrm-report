const TEST_USER_ID = "R6197829";
const TEST_PASSWORD = "Azizi";
const SESSION_KEY = "pdrmLoggedInUser";

function getCurrentPage() {
  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
}

function redirectIfNotLoggedIn() {
  const isLoggedIn = sessionStorage.getItem(SESSION_KEY);
  const currentPage = getCurrentPage();

  if (!isLoggedIn && currentPage !== "index.html") {
    window.location.href = "index.html";
  }
}

function redirectIfLoggedIn() {
  const isLoggedIn = sessionStorage.getItem(SESSION_KEY);
  const currentPage = getCurrentPage();

  if (isLoggedIn && currentPage === "index.html") {
    window.location.href = "dashboard.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = getCurrentPage();

  if (currentPage === "index.html") {
    redirectIfLoggedIn();

    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");

    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userId = document.getElementById("userId").value.trim();
        const password = document.getElementById("password").value.trim();

        if (userId === TEST_USER_ID && password === TEST_PASSWORD) {
          sessionStorage.setItem(SESSION_KEY, userId);
          window.location.href = "dashboard.html";
        } else {
          loginError.textContent = "ID Pengguna atau Kata Laluan tidak sah.";
        }
      });
    }
  } else {
    redirectIfNotLoggedIn();

    const officerSession = document.getElementById("officerSession");
    const logoutBtn = document.getElementById("logoutBtn");
    const userId = sessionStorage.getItem(SESSION_KEY);

    if (officerSession && userId) {
      officerSession.textContent = `Pegawai: ${userId}`;
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = "index.html";
      });
    }
  }
});
