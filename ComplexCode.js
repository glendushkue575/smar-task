/*

Filename: ComplexCode.js

This code demonstrates a complex and sophisticated implementation of a web application that simulates an online shopping platform.

*/

// Database Initialization
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
  { id: 3, name: "Product 3", price: 20 },
  // Add more products...
];

const users = [
  { id: 1, name: "User 1", email: "user1@example.com" },
  { id: 2, name: "User 2", email: "user2@example.com" },
  { id: 3, name: "User 3", email: "user3@example.com" },
  // Add more users...
];

// User Authentication
function authenticateUser(email, password) {
  // Simulate user authentication logic
  return users.find(user => user.email === email);
}

// Product Retrieval
function getProductById(productId) {
  return products.find(product => product.id === productId);
}

// ShoppingCart Class
class ShoppingCart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addItem(productId, quantity) {
    const product = getProductById(productId);
    if (!product) {
      console.error("Product not found.");
      return;
    }

    this.items.push({ product, quantity });
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  checkout() {
    // Simulate payment gateway integration and order placement
    console.log(`Order placed by ${this.user.name} for a total of $${this.getTotalPrice()}.`);
  }
}

// Usage
const userEmail = "user2@example.com";
const password = "password123";

const user = authenticateUser(userEmail, password);
if (!user) {
  console.error("Invalid credentials.");
  return;
}

const cart = new ShoppingCart(user);
cart.addItem(1, 2);
cart.addItem(2, 1);
cart.addItem(3, 3);

console.log(`User ${user.name} added items to the cart with a total of $${cart.getTotalPrice()}.`);

// User proceeds to checkout
cart.checkout();