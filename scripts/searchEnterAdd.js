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


function searchCandyInInventoryXML(candyName, page) {
  
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
      var products = xmlDoc.documentElement.getElementsByTagName("product");
     
      for (var i = 0; i < products.length; i++) {
        var product = products[i];

        const name = product.querySelector("name").textContent;
        const categoryXML = product.querySelector("category").textContent;
        const price = parseFloat(product.querySelector("price").textContent);
        const inventory = parseInt(product.querySelector("inventory").textContent);
        const file = product.querySelector("file").textContent;

        // Filter products based on the selected category
        if(file === page){
          if (name === candyName) {
            const productItem = document.createElement("div");
            productItem.innerHTML = `
                <h2>${name}</h2>
                <p>Price: $${price}</p>
                <img style="max-width: 200px; max-height: 150px;" src="../images/${page}-${name}.jpg" alt="${name}"><br>
                <label>Enter quantity: <input type="number" id="quantityInput"></label><br>
                <button onclick="addToCartXML('${name}')">Add to Cart</button>
            `;
            productContainer.appendChild(productItem);
            document.getElementById("candyInfo").innerHTML = "";
        } else {
            document.getElementById("candyInfo").innerHTML = `${name} is out of stock or is presently unavailable`;
        }
        }
        
      }
    }
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

function addToCartXML (productName, ){

  const quantity = parseInt(document.getElementById("quantityInput").value);
  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  let products;
  var xhr2 = new XMLHttpRequest();

  var url = "http://localhost:8000/scripts/php/loadXML.php?timestamp=" + new Date().getTime();

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
          // If the product already exists in the cart, update the quantity
          const quantitySpan = existingCartItem.querySelector(".quantity");
          const currentQuantity = parseInt(quantitySpan.textContent);
          quantitySpan.textContent = currentQuantity + quantity;

          const costSpan = existingCartItem.querySelector(".cost");
          const currentCost = parseInt(costSpan.textContent);
          costSpan.textContent = (price * (quantity+currentQuantity));

          products[selectedProduct].querySelector(
            "inventory"
          ).textContent = inventory - currentQuantity - 1;
      } else {
          // If the product is not in the cart, add it as a new item
          const cartItem = document.createElement("li");
          let cost = price * quantity;
          cartItem.className = "cartItems";
          cartItem.dataset.productName = productName;
          cartItem.innerHTML = `<span class="name">${name}</span>  -------------------- $<span class="cost">${cost}</span> -------------- <span class="quantity">${quantity}</span> --------------- <span class="category">${categoryXML}</span>`;
          cartItems.appendChild(cartItem);

          products[selectedProduct].querySelector(
            "inventory"
          ).textContent = inventory - 1;
      }
      
        if (parseInt(products[selectedProduct].querySelector("inventory").textContent) === 0) {
          alert(`${name} is out of stock.`);
        }
      }
    }
  };
  xhr2.send();
}

function searchItem(event, page) {
  event.preventDefault();
  const candyNameInput = document.getElementById("candyNameInput").value;
  const isValidInput = /^[A-Za-z\s]+$/.test(candyNameInput);
  if (!isValidInput) {
      alert("Invalid candy name. Please enter a valid name without numbers.");
      return;
  }
  if(page === 'snacks' || page === 'candy'){
    searchCandyInInventoryXML(candyNameInput, page);
  }
  searchCandyInInventory(candyNameInput, page);
}



