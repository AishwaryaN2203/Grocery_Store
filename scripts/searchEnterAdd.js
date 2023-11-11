function searchCandyInInventory(candyName, page) {
  
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; 
  
  let candyInfo = null;

  products.forEach((product) => {
    if (product.name == candyName) {
      candyInfo = product;
    }
  });
    
  if (candyInfo) {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
          <h2>${candyInfo.name}</h2>
          <p>Price: $${candyInfo.price}</p>
          <img style="max-width: 200px; max-height: 150px;" src="../images/${page}-${candyInfo.name}.jpg" alt="${candyInfo.name}"><br>
          <label>Enter quantity: <input type="number" id="quantityInput"></label><br>
          <button onclick="addToCart('${candyInfo.name}')">Add to Cart</button>
      `;
      productContainer.appendChild(productItem);
      document.getElementById("candyInfo").innerHTML = "";
  } else {
      document.getElementById("candyInfo").innerHTML = `${candyName} is out of stock or is presently unavailable`;
  }

}


function addToCart(productName) {

  const quantity = parseInt(document.getElementById("quantityInput").value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

  const cartItems = document.getElementById("cart-items");
  const product = products.find((p) => p.name === productName);
  const existingCartItem = Array.from(cartItems.children).find((item) => {
      return item.dataset.productName === productName;
  });

  if (product && product.inventory > 0 && product.inventory >= quantity) {
    if (document.getElementById("cart-items").childNodes.length == 0) {
          const cartItem = document.createElement("li");
          cartItem.className = "cartItems";
          cartItem.innerHTML = `Product Name --------------  Cost  --------------   Quantity\n`;
          cartItems.appendChild(cartItem);

          const newButton = document.getElementById('addFinalcart');
          newButton.removeAttribute("hidden");
    }
      if (existingCartItem) {
          // If the product already exists in the cart, update the quantity
          const quantitySpan = existingCartItem.querySelector(".quantity");
          const currentQuantity = parseInt(quantitySpan.textContent);
          quantitySpan.textContent = currentQuantity + quantity;

          const costSpan = existingCartItem.querySelector(".cost");
          const currentCost = parseInt(costSpan.textContent);
          costSpan.textContent = (product.price * (quantity+currentQuantity));
      } else {
          // If the product is not in the cart, add it as a new item
          const cartItem = document.createElement("li");
          let cost = product.price * quantity;
          cartItem.className = "cartItems";
          cartItem.dataset.productName = productName;
          cartItem.innerHTML = `<span class="name">${product.name}</span>  -------------------- $<span class="cost">${cost}</span> -------------- <span class="quantity">${quantity}</span>`;
          cartItems.appendChild(cartItem);
      }
      product.inventory-=quantity;
      
  }
  else if (product.inventory < quantity) {
    alert(`${product.name} has ${product.inventory} in stock.`);
}
}


function searchItem(event, page) {
  event.preventDefault();
  const candyNameInput = document.getElementById("candyNameInput").value;
  const isValidInput = /^[A-Za-z\s]+$/.test(candyNameInput);
  if (!isValidInput) {
      alert("Invalid candy name. Please enter a valid name without numbers.");
      return;
  }
  searchCandyInInventory(candyNameInput, page);
}



