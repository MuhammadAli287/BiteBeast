
const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.json([
{
    "id": 1,
    "title": "Classic Margherita Pizza",
    "price": 12.99,
    "category": "Pizza",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    "description": "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    "inStock": true,
    "reviews": 124
  },
  {
    "id": 2,
    "title": "Pepperoni Pizza",
    "price": 14.99,
    "category": "Pizza",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    "description": "Oven-baked pizza topped with pepperoni and melted cheese.",
    "inStock": true,
    "reviews": 186
  },
  {
    "id": 3,
    "title": "BBQ Chicken Pizza",
    "price": 15.49,
    "category": "Pizza",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    "description": "Smoky barbecue chicken, red onions, and mozzarella on a crisp crust.",
    "inStock": true,
    "reviews": 98
  },
  {
    "id": 4,
    "title": "Classic Beef Burger",
    "price": 9.99,
    "category": "Burgers",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    "description": "Juicy beef patty with lettuce, tomato, cheese, and house sauce.",
    "inStock": true,
    "reviews": 215
  },
  {
    "id": 5,
    "title": "Double Cheeseburger",
    "price": 12.49,
    "category": "Burgers",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a",
    "description": "Two grilled beef patties layered with cheddar cheese and burger sauce.",
    "inStock": true,
    "reviews": 173
  },
  {
    "id": 6,
    "title": "Crispy Chicken Burger",
    "price": 10.49,
    "category": "Burgers",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    "description": "Crispy chicken fillet with lettuce and creamy mayo in a toasted bun.",
    "inStock": true,
    "reviews": 112
  },
  {
    "id": 7,
    "title": "Grilled Ribeye Steak",
    "price": 24.99,
    "category": "Steak",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "description": "Tender grilled ribeye steak seasoned with herbs.",
    "inStock": true,
    "reviews": 89
  },
  {
    "id": 8,
    "title": "Peppercorn Steak",
    "price": 22.99,
    "category": "Steak",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    "description": "Grilled steak with creamy peppercorn sauce and seasonal vegetables.",
    "inStock": true,
    "reviews": 64
  },
        {
    "id": 9,
    "title": "Chicken Alfredo",
    "price": 14.49,
    "category": "Chicken",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
    "description": "Grilled chicken breast with creamy Alfredo sauce and herbs.",
    "inStock": true,
    "reviews": 143
  },
  {
    "id": 10,
    "title": "Crispy Fried Chicken",
    "price": 11.99,
    "category": "Chicken",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
    "description": "Golden crispy chicken seasoned with our signature spices.",
    "inStock": true,
    "reviews": 201
  },
  {
    "id": 11,
    "title": "Chicken Chow Mein",
    "price": 12.49,
    "category": "Chowmein",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    "description": "Stir-fried noodles with chicken, vegetables, and savory soy sauce.",
    "inStock": true,
    "reviews": 107
  },
        {
    "id": 12,
    "title": "Vegetable Chow Mein",
    "price": 10.49,
    "category": "Chowmein",
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    "description": "Noodles tossed with fresh vegetables and garlic-soy sauce.",
    "inStock": true,
    "reviews": 76
  },
  {
    "id": 13,
    "title": "Creamy Alfredo Pasta",
    "price": 13.49,
    "category": "Pasta",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
    "description": "Pasta coated in creamy Parmesan sauce with black pepper.",
    "inStock": true,
    "reviews": 154
  },
  {
    "id": 14,
    "title": "Spaghetti Bolognese",
    "price": 13.99,
    "category": "Pasta",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    "description": "Spaghetti served with a slow-cooked tomato and minced beef sauce.",
    "inStock": true,
    "reviews": 132
  },
  {
    "id": 15,
    "title": "Penne Arrabbiata",
    "price": 11.99,
    "category": "Pasta",
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    "description": "Penne pasta in spicy tomato sauce with garlic and herbs.",
    "inStock": true,
    "reviews": 81
  },
  {
    "id": 16,
    "title": "Fish and Chips",
    "price": 16.99,
    "category": "English Food",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1579208030886-b937da0925dc",
    "description": "Crispy battered fish served with golden fries and lemon.",
    "inStock": true,
    "reviews": 93
  },
  {
    "id": 17,
    "title": "Classic Club Sandwich",
    "price": 10.99,
    "category": "English Food",
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    "description": "Toasted sandwich with chicken, lettuce, tomato, and cheese.",
    "inStock": true,
    "reviews": 74
  },
  {
    "id": 18,
    "title": "Grilled Chicken Sandwich",
    "price": 11.49,
    "category": "English Food",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0ef937f",
    "description": "Grilled chicken, crisp lettuce, and herb dressing in toasted bread.",
    "inStock": true,
    "reviews": 69
  },
  {
    "id": 19,
    "title": "Four Cheese Pizza",
    "price": 16.49,
    "category": "Pizza",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
    "description": "Pizza topped with mozzarella, cheddar, Parmesan, and blue cheese.",
    "inStock": true,
    "reviews": 91
  },
  {
    "id": 20,
    "title": "Mushroom Steak",
    "price": 23.49,
    "category": "Steak",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462",
    "description": "Grilled steak topped with creamy mushroom sauce and vegetables.",
    "inStock": false,
    "reviews": 57
  },
  {
    "id": 21,
    "title": "Spicy Chicken Chow Mein",
    "price": 12.99,
    "category": "Chowmein",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
    "description": "Wok-tossed noodles with chicken, peppers, and a spicy sauce.",
    "inStock": true,
    "reviews": 62
  }
]
    )
})

module.exports = router;