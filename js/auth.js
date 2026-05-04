document.addEventListener("DOMContentLoaded", function () {

  console.log("auth.js loaded");

  // ================= USER SESSION =================
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const adminLink = document.getElementById("adminLink");

  if (adminLink && user && user.role === "admin") {
    adminLink.style.display = "inline-block";
  }

  const protectedPages = [
    "lost-items.html",
    "found-items.html",
    "my-items.html",
    "report-item.html",
    "admin.html"
  ];

  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage) && !user) {
    window.location.replace("login.html");
  }

  document.body.style.visibility = "visible";

  // ================= REGISTER =================
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    console.log("Register form detected");

    registerForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      console.log("Register clicked");

      const userData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim()
      };

      try {
        const res = await fetch("http://127.0.0.1:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        });

        const data = await res.json();

        if (res.ok) {
          alert("Registered successfully!");
          window.location.href = "login.html";
        } else {
          alert(data.error);
        }

      } catch (err) {
        console.log(err);
        alert("Server error!");
      }
    });
  }

  // ================= LOGIN =================
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    console.log("Login form detected");

    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      console.log("Login clicked");

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      try {
        const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        console.log("Login response:", data);

        if (res.ok) {
          // ✅ Save session
          localStorage.setItem("loggedInUser", JSON.stringify(data));
          
            if (data.role === "admin") {
              localStorage.setItem("isAdmin", "true");
            } else {
              localStorage.removeItem("isAdmin");
            }

          console.log("Saved user:", localStorage.getItem("loggedInUser"));

          alert("Login successful!");
          window.location.href = "index.html";

        } else {
          alert(data.error);
        }

      } catch (err) {
        console.log(err);
        alert("Server error!");
      }
    });
  }

});