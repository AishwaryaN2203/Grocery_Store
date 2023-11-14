function displayCategoryXML(category, page) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  var xhr1 = new XMLHttpRequest();
  var url =
    "http://localhost:8000/scripts/php/loadXML.php?timestamp=" +
    new Date().getTime();

  xhr1.open("GET", url, true);
  xhr1.send();
  xhr1.onload = function () {
    if (xhr1.status === 200) {
      var xmlString = xhr1.responseText;
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlString, "application/xml");
      var products =
      xmlDoc.documentElement.getElementsByTagName("product");
     
      for (var i = 0; i < products.length; i++) {
        var product = products[i];

        const name = product.querySelector("name").textContent;
        const categoryXML = product.querySelector("category").textContent;
        const price = parseFloat(product.querySelector("price").textContent);
        const inventory = parseInt(
          product.querySelector("inventory").textContent
        );
        const file = product.querySelector("file").textContent;

        // Filter products based on the selected category
        if(file === page){
          if (category === "shop-all" || category == categoryXML) {
            productContainer.classList.add("product-element");
            if (inventory > 0) {
              const productItem = document.createElement("div");
              productItem.innerHTML = `
              <img style="max-width: 100px; max-height: 100px;" src="../images/${categoryXML}-${name}.jpg" alt="${name}">
              <h3>${name}</h3>
              <p>Price: $${price}</p>
              <button onclick="addToCart('${name}')">Add to Cart</button>
          `;
              productContainer.appendChild(productItem);
            }
          }
        }
        
      }
    }
  };
}
// Function to add a product to the cart
function addToCart(productName) {
  let products;
  var xhr2 = new XMLHttpRequest();

  var url =
    "http://localhost:8000/scripts/php/loadXML.php?timestamp=" +
    new Date().getTime();

  xhr2.open("GET", url, true);
  xhr2.onload = function () {
    if (xhr2.status === 200) {
      var xmlString = xhr2.responseText;
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlString, "application/xml");
      products = xmlDoc.documentElement.getElementsByTagName("product");
      let selectedProduct = -1;

      for (var i = 0; i < products.length; i++) {
        var product = products[i];

        const name = product.querySelector("name").textContent;
        if (name === productName) {
          selectedProduct = i;
        }
      }

      const cartItems = document.getElementById("cart-items");
      const existingCartItem = Array.from(cartItems.children).find((item) => {
        return item.dataset.productName === productName;
      });

      var name =
        products[selectedProduct].querySelector("name").textContent;
      var categoryXML =
        products[selectedProduct].querySelector("category").textContent;
      var price = parseFloat(
        products[selectedProduct].querySelector("price").textContent
      );
      var inventory = parseInt(
        products[selectedProduct].querySelector("inventory").textContent
      );

      if (product && inventory > 0) {
        if (document.getElementById("cart-items").childNodes.length == 0) {
          const cartItem = document.createElement("li");
          cartItem.className = "cartItems";
          cartItem.innerHTML = `Product Name --------------  Cost  --------------   Quantity ---------- Category \n`;
          cartItems.appendChild(cartItem);

          const newButton = document.getElementById("addFinalcart");
          newButton.removeAttribute("hidden");
        }
        if (existingCartItem) {
          const quantitySpan = existingCartItem.querySelector(".quantity");
          const currentQuantity = parseInt(quantitySpan.textContent);
          quantitySpan.textContent = currentQuantity + 1;

          const costSpan = existingCartItem.querySelector(".cost");
          const currentCost = parseInt(costSpan.textContent);
          costSpan.textContent = price * (currentQuantity + 1);

          products[selectedProduct].querySelector(
            "inventory"
          ).textContent = inventory - currentQuantity - 1;
        } else {
          // If the product is not in the cart, add it as a new item
          const cartItem = document.createElement("li");
          let cost = price * 1;
          cartItem.className = "cartItems";
          cartItem.dataset.productName = productName;
          cartItem.innerHTML = `<span class="name">${name}</span>  -------------------- $<span class="cost">${cost}</span> -------------- <span class="quantity">1</span> --------------- <span class="category">${categoryXML}</span>`;
          cartItems.appendChild(cartItem);

          products[selectedProduct].querySelector(
            "inventory"
          ).textContent = inventory - 1;
        }
        // Update inventory message
        if (parseInt(products[selectedProduct].querySelector("inventory").textContent) === 0) {
          alert(`${name} is out of stock.`);
        }
      }
    }
  };
  xhr2.send();
}
