async function getResponse() {
    let response = await fetch("shop.json");
    let content = await response.json();
    content = content.slice(0, 9); // Limit to first 9 items
  
    // Initial render
    renderItems(content);
  }
  
  // Function to render items dynamically
  function renderItems(items) {
    let node_for_insert = document.getElementById("node_for_insert");
    node_for_insert.innerHTML = ""; // Clear existing items
    
    for (const item of items) {
      // Create elements and append them
      const listItem = document.createElement("li");
      listItem.className = "grid-item";
      listItem.style.width = "80%";
  
      listItem.innerHTML = `
        <img style="width: 180px;" src="${item.img}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.description}.</p>
        <p><i>Price ${item.price}₽.</i></p>
        <input type="hidden" name="vendor_code" value="${item.vendor_code}">
        <p class="order-field" style="color: rgb(225,225,225); font-size: 1em;">Order 
          <input class="button field" style="justify-content: center; width:90%;" type="number" name="amount" value="0">
        </p>
      `;
  
      node_for_insert.appendChild(listItem);
    }
  }
  
  // Initialize the page
  getResponse();
  