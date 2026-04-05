const items = JSON.parse(localStorage.getItem("items")) || [];

const lostItemsContainer = document.getElementById("lostItems");

function displayItems(filteredItems) {

  lostItemsContainer.innerHTML = "";

  filteredItems.forEach(item => {

    if (item.type === "lost" && item.status !== "returned") {

      const card = document.createElement("div");
      card.className = "item-card";

      card.innerHTML = `
        <img src="${item.image || ''}" class="item-img">

        <h3>${item.name}</h3>

        <p class="status ${item.status}">
          ${item.status.toUpperCase()}
        </p>

        <p><strong>Category:</strong> ${item.category}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Date:</strong> ${item.date}</p>
      `;

      lostItemsContainer.appendChild(card);
    }
  });
}

displayItems(items);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

  const searchText = searchInput.value.toLowerCase();

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(searchText) ||
    item.category.toLowerCase().includes(searchText)
  );

  displayItems(filtered);
});