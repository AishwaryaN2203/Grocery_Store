const products = [
    // baking - file
    { name: "Apple", category: "pie", price: 5, inventory: 10 },
    { name: "Sugar", category: "pie", price: 5, inventory: 10 },
    { name: "Yeast", category: "pie", price: 5, inventory: 10 },
    { name: "Milk", category: "pie", price: 5, inventory: 10 },
    { name: "Creamer", category: "crusts", price: 3, inventory: 15 },
    { name: "Caramel", category: "crusts", price: 3, inventory: 15 },
    { name: "Milk", category: "crusts", price: 3, inventory: 15 },
    { name: "Cheese", category: "pudding", price: 5, inventory: 10 },
    { name: "Chocolate", category: "pudding", price: 5, inventory: 10 },
    { name: "Apple", category: "pan", price: 3, inventory: 15 },
    { name: "Berries", category: "pan", price: 3, inventory: 15 },
    { name: "Yeast", category: "pan", price: 3, inventory: 15 },

    // breakfast and cereal
    { name: "Wheat", category: "cereal-shop", price: 5, inventory: 10 },
    { name: "Kid", category: "cereal-shop", price: 3, inventory: 15 },
    { name: "Adult", category: "cereal-shop", price: 5, inventory: 10 },
    { name: "Choco", category: "cereal-shop", price: 5, inventory: 10 },
    { name: "Chocolate-Pancake", category: "pancake-waffles", price: 3, inventory: 15 },
    { name: "Choco-Waffle", category: "pancake-waffles", price: 5, inventory: 10 },
    { name: "Cream-Waffle", category: "pancake-waffles", price: 3, inventory: 15 },
    { name: "Vanilla-Bread", category: "breads", price: 5, inventory: 10 },
    { name: "Choco-Bread", category: "breads", price: 3, inventory: 15 },
    { name: "Wheat-Bread", category: "breads", price: 5, inventory: 10 },
    {
      name: "Oak",
      category: "oatmeal",
      price: 5,
      inventory: 10,
    },
    {
      name: "M&M",
      category: "oatmeal",
      price: 3,
      inventory: 15,
    },
    {
      name: "Honey",
      category: "oatmeal",
      price: 5,
      inventory: 10,
    },
    {
      name: "Green Grits",
      category: "grits",
      price: 3,
      inventory: 15,
    },
    {
      name: "Wheat",
      category: "grits",
      price: 5,
      inventory: 10,
    },
    { name: "Chips", category: "rollbacks", price: 3, inventory: 15 },
    { name: "sandwitch", category: "rollbacks", price: 5, inventory: 10 },
    { name: "B-Bread", category: "rollbacks", price: 3, inventory: 15 },

    // candy file
    { name: "Candies",category: "candy", price: 5, inventory: 10 },
    { name: "Berries",category: "candy",price: 3, inventory: 15 },
    { name: "Sticks", category: "candy",price: 5, inventory: 10 },
    { name: "Poppies", category: "candy", price: 3, inventory: 15 },
    { name: "Chocos",category: "candy", price: 5, inventory: 10 },

    // fresh products file
    { name: "Carrot", category: "vegetables", price: 5, inventory: 10 },
    { name: "Beetroot", category: "vegetables", price: 3, inventory: 15 },
    { name: "Onion", category: "vegetables", price: 5, inventory: 10 },
    { name: "Tomato", category: "vegetables", price: 3, inventory: 15 },
    { name: "Lettuce", category: "vegetables", price: 5, inventory: 10 },
    { name: "Banana", category: "fruits", price: 3, inventory: 15 },
    { name: "Apple", category: "fruits", price: 5, inventory: 10 },
    { name: "Grapes", category: "fruits", price: 3, inventory: 15 },
    { name: "Rose", category: "flowers", price: 5, inventory: 10 },
    { name: "Jasmin", category: "flowers", price: 3, inventory: 15 },
    { name: "Sunflower", category: "flowers", price: 5, inventory: 10 },
    { name: "Lily", category: "flowers", price: 3, inventory: 15 },
    {
      name: "Banana-Orange",
      category: "pre-cut-fruits",
      price: 5,
      inventory: 10
    },
    {
      name: "Orange-Apple",
      category: "pre-cut-fruits",
      price: 3,
      inventory: 15
    },
    {
      name: "Apple-Kiwi",
      category: "pre-cut-fruits",
      price: 5,
      inventory: 10
    },
    {
      name: "Avacado Dip",
      category: "salsa-and-dips",
      price: 3,
      inventory: 15
    },
    {
      name: "Tomato",
      category: "salsa-and-dips",
      price: 5,
      inventory: 10
    },
    {
      name: "Chilli-Tomato",
      category: "salsa-and-dips",
      price: 3,
      inventory: 15
    },
    {
      name: "Beans",
      category: "season-produce",
      price: 5,
      inventory: 10
    },
    {
      name: "Okra",
      category: "season-produce",
      price: 3,
      inventory: 15
    },
    { name: "Beans", category: "new-items", price: 5, inventory: 10 },
    { name: "Blueberries", category: "new-items", price: 5, inventory: 10 },
    { name: "Avacado", category: "rollbacks", price: 3, inventory: 15 },
    { name: "Hummus", category: "rollbacks", price: 5, inventory: 10 },
    { name: "Peas", category: "rollbacks", price: 3, inventory: 15 },

    // frozen 
  { name: "Waffles", category: "breakfast", price: 5, inventory: 10 },
  { name: "Oats", category: "breakfast", price: 3, inventory: 15 },
  { name: "Salad", category: "breakfast", price: 5, inventory: 10 },
  { name: "Burger", category: "breakfast", price: 3, inventory: 15 },
  { name: "Milkshake", category: "breakfast", price: 5, inventory: 10 },
  { name: "Tiramisu", category: "dessert", price: 3, inventory: 15 },
  { name: "Icecream", category: "dessert", price: 5, inventory: 10 },
  { name: "Indian", category: "meals", price: 5, inventory: 10 },
  { name: "Chinese", category: "meals", price: 3, inventory: 15 },
  { name: "Thai", category: "meals", price: 5, inventory: 10 },
  { name: "Albenian", category: "meals", price: 3, inventory: 15 },
  {
    name: "Cheese",
    category: "pizza",
    price: 5,
    inventory: 10,
  },
  {
    name: "Pepparoni",
    category: "pizza",
    price: 3,
    inventory: 15,
  },
  {
    name: "Vegetables",
    category: "pizza",
    price: 5,
    inventory: 10,
  },
  {
    name: "Chicken",
    category: "meat",
    price: 3,
    inventory: 15,
  },
  {
    name: "Fish",
    category: "meat",
    price: 5,
    inventory: 10,
  },
  {
    name: "Shrimp",
    category: "meat",
    price: 3,
    inventory: 15,
  },
  {
    name: "Chips",
    category: "snacks",
    price: 5,
    inventory: 10,
  },
  {
    name: "Churos",
    category: "snacks",
    price: 3,
    inventory: 15,
  },

  { name: "Peas", category: "rollbacks", price: 3, inventory: 15 },
  { name: "Mint", category: "rollbacks", price: 5, inventory: 10 },
  { name: "Cilantro", category: "rollbacks", price: 3, inventory: 15 },

  // pantry 
    { name: "Basket", category: "goods", price: 5, inventory: 10 },
    { name: "Kettle", category: "goods", price: 3, inventory: 15 },
    { name: "Freshner", category: "goods", price: 5, inventory: 10 },
    { name: "Beetroot", category: "vegetables", price: 3, inventory: 15 },
    { name: "Tomato", category: "vegetables", price: 5, inventory: 10 },
    { name: "Carrot", category: "vegetables", price: 3, inventory: 15 },
    { name: "Onion", category: "vegetables", price: 5, inventory: 10 },
    { name: "Lettuce", category: "vegetables", price: 3, inventory: 15 },
    { name: "Pepper", category: "condiments", price: 5, inventory: 10 },
    { name: "Cinnamon", category: "condiments", price: 3, inventory: 15 },
    { name: "Chilliflakes", category: "condiments", price: 3, inventory: 15 },
    {
      name: "Peanut",
      category: "peanut-butter",
      price: 5,
      inventory: 10,
    },
    {
      name: "Butter",
      category: "peanut-butter",
      price: 3,
      inventory: 15,
    },
    {
      name: "Peanut-Butter",
      category: "peanut-butter",
      price: 5,
      inventory: 10,
    },
    {
      name: "Cheese",
      category: "pizza-pasta",
      price: 3,
      inventory: 15,
    },
    {
      name: "Alfredo",
      category: "pizza-pasta",
      price: 5,
      inventory: 10,
    },
    {
      name: "Tomato-Pasta",
      category: "pizza-pasta",
      price: 3,
      inventory: 15,
    },
    { name: "Knife", category: "rollbacks", price: 3, inventory: 15 },
    { name: "Cutting-Board", category: "rollbacks", price: 5, inventory: 10 },
    { name: "Scissors", category: "rollbacks", price: 3, inventory: 15 },

    // snacks file
    { name: "CocaCola", category: "snacks", price: 5, inventory: 10 },
    { name: "Chips", category: "snacks", price: 3, inventory: 15 },
    { name: "Chicken", category: "snacks", price: 5, inventory: 10 },
    { name: "Omelette", category: "snacks", price: 3, inventory: 15 },
    { name: "Fries", category: "snacks", price: 5, inventory: 10 },
    { name: "Churos", category: "snacks", price: 5, inventory: 10 }
]