function displayCategory(category) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    if (product.category === category && product.inventory > 0) {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
                  <img style="max-width: 100px; max-height: 100px;" src="../images/baking-${product.name}.jpg" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>Price: $${product.price}</p>
                  <button onclick="addToCart('${product.name}')">Add to Cart</button>
              `;
      productContainer.appendChild(productItem);
    }
  });
}

// Function to add a product to the cart
function addToCart(productName) {

  const cartItems = document.getElementById("cart-items");
  const product = products.find((p) => p.name === productName);
  const existingCartItem = Array.from(cartItems.children).find((item) => {
    return item.dataset.productName === productName;
  });

  if (product && product.inventory > 0) {
    if (document.getElementById("cart-items").childNodes.length == 0) {
      const cartItem = document.createElement("li");
      cartItem.className = "cartItems";
      cartItem.innerHTML = `Product Name --------------  Cost  --------------   Quantity\n`;
      cartItems.appendChild(cartItem);

      const newButton = document.getElementById('addFinalcart');
      newButton.removeAttribute("hidden");
    }
    if (existingCartItem) {
      const quantitySpan = existingCartItem.querySelector(".quantity");
      const currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
      
      const costSpan = existingCartItem.querySelector(".cost");
      const currentCost = parseInt(costSpan.textContent);
      costSpan.textContent = currentCost * (currentQuantity + 1);
    } else {
      // If the product is not in the cart, add it as a new item
      const cartItem = document.createElement("li");
      let cost = product.price * 1;
      cartItem.className = "cartItems";
      cartItem.dataset.productName = productName;
      cartItem.innerHTML = `${product.name}  -------------------- $<span class="cost">${cost}</span> -------------- <span class="quantity">1</span>`;
      cartItems.appendChild(cartItem);
    }

    // Decrease inventory
    product.inventory--;

    // Update inventory message
    if (product.inventory === 0) {
      alert(`${product.name} is out of stock.`);
    }
  }
}
