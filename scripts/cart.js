function displayCartItems(event, when) {
  event.preventDefault();
  const cartItemsTable = document.getElementById("cart-items-table");
  const totalPriceElement = document.getElementById("total-price");
  let totalPrice = 0;

  // Clear the table before adding new cart items
  cartItemsTable.innerHTML = "";

  const row = document.createElement("tr");
  row.innerHTML = `
      <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Total Cost</th>
    </tr>`;

  if (when === "present") {
    let cartData = localStorage.getItem("cart");
    cartItems = JSON.parse(cartData);
  }
  cartItemsTable.appendChild(row);
  cartItems.forEach((item) => {
    totalPrice += parseInt(item.cost);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.cost}</td>
      `;

    cartItemsTable.appendChild(row);
  });

  totalPriceElement.textContent = `Total Price for All Items: $${totalPrice}`;

  const button = document.getElementById("other-buttons");
  const btn1 = '<button type="submit" value="Confirm and Pay" onclick="saveAndPay()">Confirm & Pay</button>';
  const btn2 = ' <button type="submit" value="Cancel and Delete Cart" onclick="cancelAndDelete()">Cancel & Delete Cart</button>';
  
  button.innerHTML +=(btn1);
  button.innerHTML += (btn2);
          
}

function addCartItemOnPage(file_name, file_type) {
  let cartData = localStorage.getItem("cart");
  let allItems = [];
  let presentCartItem = [];

  if (cartData) {
    allItems = JSON.parse(cartData);
  }
  if (document.getElementById("cart-items").childNodes.length > 0) {
    document
      .getElementById("cart-items")
      .childNodes.forEach(function (listItem) {
        const nameElement = listItem.querySelector(".name");
        const quantityElement = listItem.querySelector(".quantity");
        const costElement = listItem.querySelector(".cost");
        const categoryElement = listItem.querySelector(".category");

        if (nameElement && quantityElement && costElement) {
          const name = nameElement.textContent;
          const quantity = quantityElement.textContent;
          const cost = costElement.textContent;
          const category = categoryElement.textContent;
          let obj = {
            name: name,
            cost: cost,
            quantity: quantity,
            file: file_name,
            category: category,
          };
          allItems.push(obj);
          presentCartItem.push(obj);
        }
      });
  }
  localStorage.setItem("cart", JSON.stringify(allItems));

  document.getElementById("cart-items").innerHTML = "";

  alert("All the items added to the cart");

  if (file_type && file_type == "xml") {
    updateCartDataXML(presentCartItem);
  }
  updateCartData();

}

function updateCartDataXML(presentCartItem) {
  
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
      
      let xmlProducts = xmlDoc;
      
      console.log(presentCartItem);
      for (var i = 0; i < presentCartItem.length; i++) {
        var cartItem = presentCartItem[i];

        // products[selectedProduct].querySelector("inventory").textContent = product.cost;
        for (var j = 0; j < products.length; j++) {
          var product = products[j];
          console.log(product.querySelector("name").textContent, product.querySelector("file").textContent, product.querySelector("category").textContent)
          console.log(cartItem.name, cartItem.file, cartItem.category);
          
          if (
            product.querySelector("name").textContent === cartItem.name &&
            product.querySelector("file").textContent === cartItem.file &&
            product.querySelector("category").textContent === cartItem.category
          ) {
            product.querySelector("inventory").textContent -= cartItem.quantity;
          }
        }
      }
    }
    xmlString = new XMLSerializer().serializeToString(xmlDoc);
    fetch("http://localhost:8000/scripts/php/writeAfterCartXML.php", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: xmlString,
    })
    .then((response) => {
      if (response.ok) {
        alert("Data successfully written to the file!");
      } else {
        alert("Failed to write data to the file.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
};

function updateCartData() {
  fetch("http://localhost:8000/scripts/php/writeAfterCart.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "jsCode=" +
      "let products = " +
      encodeURIComponent(JSON.stringify(products)),
  })
    .then((response) => {
      if (response.ok) {
        alert("Data successfully written to the file!");
      } else {
        alert("Failed to write data to the file.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function saveAndPay(){
  localStorage.clear();

  const cartItemsTable = document.getElementById("cart-items-table");
  cartItemsTable.innerHTML = "";

  const button = document.getElementById("other-buttons");
  button.innerHTML = "";

  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = "";
}

function cancelAndDelete(){
  cancelXMLData();
  cancelJSData();
  saveAndPay();
}

function cancelJSData(){

  fetch('http://localhost:8000/scripts/php/writeOldJS.php')
    .then(response => response.text())
    .then(data => { console.log(data); })
    .catch(error => { console.error('Error:', error) });

}

function cancelXMLData() {
  fetch('http://localhost:8000/scripts/php/writeOldXML.php')
    .then(response => response.text())
    .then(data => { console.log(data); })
    .catch(error => { console.error('Error:', error) });
}

