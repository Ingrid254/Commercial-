const products = [
  { id: 1, name: 'Product 1', price: 49.99, image: prod1.jpeg},
  { id: 2, name: 'Product 2', price: 29.99, image: 'prod2.jpeg' },
  { id: 3, name: 'Product 3', price: 99.99, image: 'prod3.jpeg' },
  { id: 4, name: 'Product 4', price: 49.99, image: 'prod4.jpeg' },
  { id: 5, name: 'Product 5', price: 49.99, image: 'prod5.jpeg' },
  { id: 6, name: 'Product 6', price: 49.99, image: 'prod6.jpeg' },
  { id: 7, name: 'Product 7', price: 49.99, image: 'prod7.jpeg' },
  { id: 8, name: 'Product 8', price: 49.99, image: 'prod8.jpeg' },
  { id: 9, name: 'Product 9', price: 49.99, image: 'prod9.jpeg' },
  { id: 10, name: 'Product 10', price: 49.99, image: 'prod10.jpeg' },
  { id: 11, name: 'Product 11', price: 49.99, image: 'prod11.jpeg' },
];

const cart = [];
let total = 0;

function displayProducts() {
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
      cart.push(product);
      total += product.price;
      updateCart();
  }
}


function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(li);
  });
  document.getElementById('cart-total').textContent = total.toFixed(2);
}


displayProducts();
