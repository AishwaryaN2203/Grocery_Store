function loadXMLDoc(filename) {
  let xmlDoc;

  if (window.XMLHttpRequest) {
      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", filename, false);
      xhttp.send();
      xmlDoc = xhttp.responseXML;
  } else if (window.ActiveXObject) {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = false;
      xmlDoc.load(filename);
  }

  return xmlDoc;
}


function displayCategory(category) {

  const xmlData = loadXMLDoc("../data/freshProducts.xml");

  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; 

  if (category === "shop-all") {
    productContainer.classList.add("product-element");
    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
                    <img style="max-width: 100px; max-height: 100px;" src="../images/${product.category}-${product.name}.jpg" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart('${product.name}')">Add to Cart</button>
                `;
      productContainer.appendChild(productItem);
    });
  }
  products.forEach((product) => {
    if (product.category === category && product.inventory > 0) {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
                <img style="max-width: 100px; max-height: 100px;" src="../images/${category}-${product.name}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            `;
      productContainer.appendChild(productItem);
    }
  });
}

function displayCategoryXML(category) {
  const xmlData = loadXMLDoc("../data/freshProducts.xml");

  const productContainer = xmlData.getElementById("product-container");
  productContainer.innerHTML = "";

  for (const productElement of productElements) {
      const name = productElement.querySelector('name').textContent;
      const categoryXML = productElement.querySelector('category').textContent;
      const price = parseFloat(productElement.querySelector('price').textContent);
      const inventory = parseInt(productElement.querySelector('inventory').textContent);

      // Filter products based on the selected category
      if (category === 'shop-all' || category == categoryXML) {
          if (inventory > 0) {
              const productItem = document.createElement('div');
              productItem.innerHTML = `
          <img style="max-width: 100px; max-height: 100px;" src="images/${categoryXML}-${name}.jpg" alt="${name}">
          <h3>${name}</h3>
          <p>Price: $${price}</p>
          <button onclick="addToCart('${name}')">Add to Cart</button>
      `;
              productContainer.appendChild(productItem);
          }
      }
  }
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
      costSpan.textContent = product.price * (currentQuantity + 1);
    } else {
      // If the product is not in the cart, add it as a new item
      const cartItem = document.createElement("li");
      let cost = product.price * 1;
      cartItem.className = "cartItems";
      cartItem.dataset.productName = productName;
      cartItem.innerHTML = `<span class="name">${product.name}</span>  -------------------- $<span class="cost">${cost}</span> -------------- <span class="quantity">1</span>`;
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

