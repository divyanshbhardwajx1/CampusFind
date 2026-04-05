
const user = JSON.parse(localStorage.getItem("loggedInUser"));

const protectedPages = [
  "lost-items.html",
  "found-items.html",
  "my-items.html",
  "report-item.html",
  "admin.html"  
];

const publicPages = [
  "login.html",
  "register.html"
];

const currentPage = window.location.pathname.split("/").pop();

if (protectedPages.includes(currentPage) && !user) {
  window.location.replace("login.html");
}

document.body.style.visibility = "visible";


// ================= REGISTER =================

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const user = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
password: document.getElementById("password").value
};

let users = JSON.parse(localStorage.getItem("users")) || [];

users.push(user);

localStorage.setItem("users", JSON.stringify(users));

alert("Registered successfully!");

window.location.href = "login.html";

});
}


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

let validUser = users.find(user =>
user.email === email && user.password === password
);

if(validUser){


localStorage.setItem("loggedInUser", JSON.stringify(validUser));


if(validUser.email === "admin@gmail.com"){
  localStorage.setItem("isAdmin", "true");
}else{
  localStorage.removeItem("isAdmin");
}

alert("Login successful!");

window.location.href = "index.html";

}else{
alert("Invalid credentials!");
}

});
}

