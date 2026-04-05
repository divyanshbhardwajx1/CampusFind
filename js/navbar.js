
document.addEventListener("DOMContentLoaded", function(){

const user = JSON.parse(localStorage.getItem("loggedInUser"));
const isAdmin = localStorage.getItem("isAdmin");

const authSection = document.getElementById("authSection");
const userSection = document.getElementById("userSection");
const username = document.getElementById("username");

const navLinks = document.querySelector(".nav-links");

if(user){

authSection.style.display = "none";
userSection.style.display = "flex";
username.innerText = "Hi, " + user.name;

if(isAdmin === "true"){
  const adminLink = document.createElement("a");
  adminLink.href = "admin.html";
  adminLink.innerText = "Admin";
  navLinks.appendChild(adminLink);
}

}

});

function logout(){

localStorage.removeItem("loggedInUser");
localStorage.removeItem("isAdmin"); 

alert("Logged out!");

window.location.href = "login.html";

}



