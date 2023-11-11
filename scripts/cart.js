  
  function displayCartItems(event, when) {
    event.preventDefault();
    const cartItemsTable = document.getElementById('cart-items-table');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    // Clear the table before adding new cart items
    cartItemsTable.innerHTML = '';

    const row = document.createElement('tr');
      row.innerHTML = `
      <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Total Cost</th>
    </tr>`;

    if(when === 'present'){
      let cartData = localStorage.getItem("cart");
      cartItems = JSON.parse(cartData);
    }
    cartItemsTable.appendChild(row);
    cartItems.forEach((item) => {
      totalPrice += parseInt(item.cost);
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.cost}</td>
      `;
  
      cartItemsTable.appendChild(row);
    });
  
    totalPriceElement.textContent = `$${totalPrice}`;
  }

  function addCartItemOnPage(){
    let cartData = localStorage.getItem("cart");
    let allItems = [];
   

    if(cartData){
      allItems = JSON.parse(cartData);
    }
    if (document.getElementById("cart-items").childNodes.length > 0) {
      document.getElementById("cart-items").childNodes.forEach( function (listItem){
       
  
        const nameElement = listItem.querySelector(".name");
        const quantityElement = listItem.querySelector(".quantity");
        const costElement = listItem.querySelector(".cost");
      
        if (nameElement && quantityElement && costElement) {
          const name = nameElement.textContent;
          const quantity = quantityElement.textContent;
          const cost = costElement.textContent;
          let obj = {
            name: name,
            cost: cost,
            quantity: quantity
          }
          allItems.push(obj);
        }

        
      });
    }
    localStorage.setItem('cart', JSON.stringify(allItems));
    
    document.getElementById("cart-items").innerHTML = "";

    alert("All the items added to the cart");

  }