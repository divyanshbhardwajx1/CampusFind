
document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("reportForm");

if(!form) return;

form.addEventListener("submit", function(e){

e.preventDefault();

const user = JSON.parse(localStorage.getItem("loggedInUser"));

const file = document.getElementById("itemImage").files[0];

let reader = new FileReader();

reader.onload = function(){

const itemType = document.getElementById("itemType").value;

const item = {
  type: itemType,
  name: document.getElementById("itemName").value,
  category: document.getElementById("category").value,
  description: document.getElementById("description").value,
  location: document.getElementById("location").value,
  date: document.getElementById("date").value,
  image: reader.result,
  userEmail: user.email,
  status: itemType,               
};

let items = JSON.parse(localStorage.getItem("items")) || [];

items.push(item);

localStorage.setItem("items", JSON.stringify(items));

alert("Item reported successfully!");

form.reset();

};

if(file){
reader.readAsDataURL(file);
}else{
reader.onload();
}

});

});

