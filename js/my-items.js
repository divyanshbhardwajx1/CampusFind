const items = JSON.parse(localStorage.getItem("items")) || [];
const user = JSON.parse(localStorage.getItem("loggedInUser"));

const container = document.getElementById("myItems");

items.forEach((item, index) => {

  if (item.userEmail === user.email) {

    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML = `
      <img src="${item.image || ''}" class="item-img">

      <h3>${item.name}</h3>

      <p class="status ${item.status}">
        ${item.status.toUpperCase()}
      </p>

      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Date:</strong> ${item.date}</p>

      ${
        item.status !== "returned"
          ? `<button class="return-btn">Mark as Returned</button>`
          : `<button disabled>Returned</button>`
      }
    `;

    const returnBtn = card.querySelector(".return-btn");

    if (returnBtn) {
      returnBtn.addEventListener("click", function () {

        items[index].status = "returned";

        localStorage.setItem("items", JSON.stringify(items));

        alert("Item marked as returned!");
        location.reload();
      });
    }

    container.appendChild(card);
  }
});