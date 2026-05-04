const user = JSON.parse(localStorage.getItem("loggedInUser"));

// 🔒 Protect admin page
if (!user || user.role !== "admin") {
  alert("Access denied");
  window.location.href = "index.html";
}

const container = document.getElementById("adminItems");
const filter = document.getElementById("filterStatus");

async function loadItems() {
  const res = await fetch("http://localhost:5000/api/items");
  let items = await res.json();

  const selected = filter.value;

  if (selected !== "all") {
    items = items.filter(item => item.status === selected);
  }

  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-card";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Status: ${item.status}</p>
      <p>User: ${item.userEmail}</p>

      ${item.status === "pending" ? `
        <button onclick="approve('${item._id}')">Approve</button>
        <button onclick="reject('${item._id}')">Reject</button>
      ` : ""}

      <button onclick="deleteItem('${item._id}')">Delete</button>
    `;

    container.appendChild(div);
  });
}

filter.addEventListener("change", loadItems);

loadItems();

// Approve
async function approve(id) {
  await fetch(`http://localhost:5000/api/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "claimed" })
  });

  alert("Approved");
  loadItems();
}

// Reject
async function reject(id) {
  await fetch(`http://localhost:5000/api/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "active",
      claimedBy: null
    })
  });

  alert("Rejected");
  loadItems();
}

// Delete
async function deleteItem(id) {
  await fetch(`http://localhost:5000/api/items/${id}`, {
    method: "DELETE"
  });

  alert("Deleted");
  loadItems();
}