let products = [
  { name: "Cherry-Apple", file: "baking", category: "pie", price: 5, inventory: 10 },
  { name: "Sugar", file: "baking", category: "pie", price: 5, inventory: 10 },
  { name: "Baking-Yeast", file: "baking", category: "pie", price: 5, inventory: 10 },
  { name: "Milk", file: "baking", category: "pie", price: 5, inventory: 10 },
  {
    name: "Creamer",
    file: "baking",
    category: "crusts",
    price: 3,
    inventory: 15,
  },
  {
    name: "Caramel",
    file: "baking",
    category: "crusts",
    price: 3,
    inventory: 15,
  },
  { name: "Milk", file: "baking", category: "crusts", price: 3, inventory: 15 },
  {
    name: "Pudding-Cheese",
    file: "baking",
    category: "pudding",
    price: 5,
    inventory: 10,
  },
  {
    name: "Chocolate",
    file: "baking",
    category: "pudding",
    price: 5,
    inventory: 10,
  },
  { name: "Apple", file: "baking", category: "pan", price: 3, inventory: 15 },
  { name: "Berries", file: "baking", category: "pan", price: 3, inventory: 15 },
  { name: "Yeast", file: "baking", category: "pan", price: 3, inventory: 15 },
  {
    name: "Oat-Wheat",
    file: "breakfast",
    category: "cereal-shop",
    price: 5,
    inventory: 10,
  },
  {
    name: "Kid",
    file: "breakfast",
    category: "cereal-shop",
    price: 3,
    inventory: 15,
  },
  {
    name: "Adult",
    file: "breakfast",
    category: "cereal-shop",
    price: 5,
    inventory: 10,
  },
  {
    name: "Choco",
    file: "breakfast",
    category: "cereal-shop",
    price: 5,
    inventory: 10,
  },
  {
    name: "Chocolate-Pancake",
    file: "breakfast",
    category: "pancake-waffles",
    price: 3,
    inventory: 15,
  },
  {
    name: "Choco-Waffle",
    file: "breakfast",
    category: "pancake-waffles",
    price: 5,
    inventory: 10,
  },
  {
    name: "Cream-Waffle",
    file: "breakfast",
    category: "pancake-waffles",
    price: 3,
    inventory: 15,
  },
  {
    name: "Vanilla-Bread",
    file: "breakfast",
    category: "breads",
    price: 5,
    inventory: 10,
  },
  {
    name: "Choco-Bread",
    file: "breakfast",
    category: "breads",
    price: 3,
    inventory: 15,
  },
  {
    name: "Wheat-Bread",
    file: "breakfast",
    category: "breads",
    price: 5,
    inventory: 10,
  },
  {
    name: "Oak",
    file: "breakfast",
    category: "oatmeal",
    price: 5,
    inventory: 10,
  },
  {
    name: "M&M",
    file: "breakfast",
    category: "oatmeal",
    price: 3,
    inventory: 15,
  },
  {
    name: "Honey",
    file: "breakfast",
    category: "oatmeal",
    price: 5,
    inventory: 10,
  },
  {
    name: "Green Grits",
    file: "breakfast",
    category: "grits",
    price: 3,
    inventory: 15,
  },
  {
    name: "Wheat",
    file: "breakfast",
    category: "grits",
    price: 5,
    inventory: 10,
  },
  {
    name: "Chips",
    file: "breakfast",
    category: "rollbacks",
    price: 3,
    inventory: 15,
  },
  {
    name: "sandwitch",
    file: "breakfast",
    category: "rollbacks",
    price: 5,
    inventory: 10,
  },
  {
    name: "B-Bread",
    file: "breakfast",
    category: "rollbacks",
    price: 3,
    inventory: 15,
  },
  {
    name: "Basket",
    file: "pantry",
    category: "goods",
    price: 5,
    inventory: 10,
  },
  {
    name: "Kettle",
    file: "pantry",
    category: "goods",
    price: 3,
    inventory: 15,
  },
  {
    name: "Freshner",
    file: "pantry",
    category: "goods",
    price: 5,
    inventory: 10,
  },
  {
    name: "Beetroot",
    file: "pantry",
    category: "vegetables",
    price: 3,
    inventory: 15,
  },
  {
    name: "Tomato",
    file: "pantry",
    category: "vegetables",
    price: 5,
    inventory: 10,
  },
  {
    name: "Carrot",
    file: "pantry",
    category: "vegetables",
    price: 3,
    inventory: 15,
  },
  {
    name: "Onion",
    file: "pantry",
    category: "vegetables",
    price: 5,
    inventory: 10,
  },
  {
    name: "Lettuce",
    file: "pantry",
    category: "vegetables",
    price: 3,
    inventory: 15,
  },
  {
    name: "Pepper",
    file: "pantry",
    category: "condiments",
    price: 5,
    inventory: 10,
  },
  {
    name: "Cinnamon",
    file: "pantry",
    category: "condiments",
    price: 3,
    inventory: 15,
  },
  {
    name: "Chilliflakes",
    file: "pantry",
    category: "condiments",
    price: 3,
    inventory: 15,
  },
  {
    name: "Peanut",
    file: "pantry",
    category: "peanut-butter",
    price: 5,
    inventory: 10,
  },
  {
    name: "Butter",
    file: "pantry",
    category: "peanut-butter",
    price: 3,
    inventory: 15,
  },
  {
    name: "Peanut-Butter",
    file: "pantry",
    category: "peanut-butter",
    price: 5,
    inventory: 10,
  },
  {
    name: "Cheese",
    file: "pantry",
    category: "pizza-pasta",
    price: 3,
    inventory: 15,
  },
  {
    name: "Alfredo",
    file: "pantry",
    category: "pizza-pasta",
    price: 5,
    inventory: 10,
  },
  {
    name: "Tomato-Pasta",
    file: "pantry",
    category: "pizza-pasta",
    price: 3,
    inventory: 15,
  },
  {
    name: "Knife",
    file: "pantry",
    category: "rollbacks",
    price: 3,
    inventory: 15,
  },
  {
    name: "Cutting-Board",
    file: "pantry",
    category: "rollbacks",
    price: 5,
    inventory: 10,
  },
  {
    name: "Scissors",
    file: "pantry",
    category: "rollbacks",
    price: 3,
    inventory: 15,
  },
  
];
