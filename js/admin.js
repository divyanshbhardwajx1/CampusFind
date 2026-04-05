
if(localStorage.getItem("isAdmin") !== "true"){
  alert("Access Denied!");
  window.location.href = "index.html";
}

const items = JSON.parse(localStorage.getItem("items")) || [];
const container = document.getElementById("adminItems");

items.forEach((item, index) => {

const card = document.createElement("div");
card.className = "item-card";

card.innerHTML = `

<h3>${item.name}</h3>

<p><strong>Type:</strong> ${item.type}</p>
<p><strong>Status:</strong> ${item.status}</p>

<p><strong>Category:</strong> ${item.category}</p>
<p><strong>Description:</strong> ${item.description}</p>
<p><strong>Location:</strong> ${item.location}</p>
<p><strong>Date:</strong> ${item.date}</p>

<p><strong>User:</strong> ${item.userEmail}</p>

${
  item.status === "pending"
    ? `
    <button class="approve-btn">Approve</button>
    <button class="reject-btn">Reject</button>
    `
    : ""
}

<button class="delete-btn">Delete</button>

`;

const approveBtn = card.querySelector(".approve-btn");

if(approveBtn){
approveBtn.addEventListener("click", function(){

items[index].status = "claimed";

localStorage.setItem("items", JSON.stringify(items));

alert("Claim approved!");

location.reload();

});
}

const rejectBtn = card.querySelector(".reject-btn");

if(rejectBtn){
rejectBtn.addEventListener("click", function(){

items[index].status = "active";
delete items[index].claimedBy;

localStorage.setItem("items", JSON.stringify(items));

alert("Claim rejected!");

location.reload();

});
}

const deleteBtn = card.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function(){

items.splice(index, 1);

localStorage.setItem("items", JSON.stringify(items));

alert("Item deleted!");

location.reload();

});

container.appendChild(card);

});

