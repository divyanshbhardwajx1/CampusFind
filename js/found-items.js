
const items = JSON.parse(localStorage.getItem("items")) || [];

const foundItemsContainer = document.getElementById("foundItems");
const searchInput = document.getElementById("searchInput");

function displayItems(filter = "") {

  foundItemsContainer.innerHTML = "";

  items.forEach((item, index) => {

  
    if (
      item.type === "found" &&
      item.status !== "returned" &&
      (item.name.toLowerCase().includes(filter.toLowerCase()) ||
       item.category.toLowerCase().includes(filter.toLowerCase()))
    ) {

      const card = document.createElement("div");
      card.className = "item-card";

      card.innerHTML = `
        <h3>${item.name}</h3>

        <p class="status ${item.status}">
          ${item.status.toUpperCase()}
        </p>

        <p><strong>Category:</strong> ${item.category}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Date:</strong> ${item.date}</p>

        ${
          item.status === "claimed"
            ? `<button disabled>Already Claimed</button>`
            : item.status === "pending"
            ? `<button disabled>Pending Approval</button>`
            :`<button class="claim-btn">Claim Item</button>`
        }
      `;

      const claimBtn = card.querySelector(".claim-btn");

      if (claimBtn) {
        claimBtn.addEventListener("click", function () {

          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          let allItems = JSON.parse(localStorage.getItem("items")) || [];

          let hasMatchingLostItem = allItems.some(i =>
            i.userEmail === user.email &&
            i.type === "lost" &&
            i.name.toLowerCase() === item.name.toLowerCase() &&
            i.category.toLowerCase() === item.category.toLowerCase()
           );

          if (!hasMatchingLostItem) {
            alert("You can only claim items that match your reported lost item.");
            return;
          }

          allItems[index].status = "pending";
          allItems[index].claimedBy = user.email; 

          localStorage.setItem("items", JSON.stringify(allItems));

          alert("Claim request submitted. Waiting for admin approval.");
          location.reload();
        });
      }

      foundItemsContainer.appendChild(card);
    }
  });
}



searchInput.addEventListener("input", function () {
  displayItems(searchInput.value);
});



displayItems();

