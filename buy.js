async function getResponse() {
    let response = await fetch("shop.json");
    let content = await response.json();
    content = content.slice(0, 9); // Limit to first 9 items
  
    // Initial render
    renderItems(content);
  
    // Add sorting functionality
    const sortSelect = document.getElementById("sort-select");
    sortSelect.addEventListener("change", function () {
      const selectedOption = sortSelect.value;
      const sortedContent = sortItems(content, selectedOption);
      renderItems(sortedContent);
    });
  }
  
  // Function to render items dynamically
  function renderItems(items) {
    let node_for_insert = document.getElementById("node_for_insert");
    node_for_insert.innerHTML = ""; // Clear existing items
    
    for (const item of items) {
      // Create elements and append them
      const listItem = document.createElement("li");
      listItem.className = "grid-item";
      listItem.style.width = "210px"; // You can move this to CSS for consistency
  
      listItem.innerHTML = `
        <img style="width: 180px;" src="${item.img}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.description}.</p>
        <p><i>Price ${item.price}₽.</i></p>
        <input type="hidden" name="vendor_code" value="${item.vendor_code}">
        <p class="order-field" style="color: rgb(225,225,225); font-size: 1em;">Order 
          <input class="button field" style="justify-content: center;" type="number" name="amount" value="0">
        </p>
      `;
  
      node_for_insert.appendChild(listItem);
    }
  }
  
  
  // Sorting function
  function sortItems(items, criteria) {
    return items.slice().sort((a, b) => {
      switch (criteria) {
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }
  
  // Initialize the page
  getResponse();
  