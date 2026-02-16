// ============================================================
// DOM ELEMENT REFERENCES
// ============================================================
  let featureGrid = document.querySelector('.featured_Grid')

  const specialGrid = document.querySelector('.special_Grid');
const searchButton = document.querySelector('.search-container');
const searchInput = document.querySelector('.search_box');
const hamburgerButton = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown_menu');
const dropdownPagesButton = document.querySelector('.drop_down_pages_btn');
const dropdownPagesItem = document.querySelector('.pages_drop_item');
const navBar = document.querySelector('.navbar');
const productGrid = document.querySelector('.product_Grid');
const cartIcon = document.querySelectorAll('.carts-icons');
const closeCartButton = document.querySelector('.close');
const cart = document.querySelector('.cart');
const scrollToTopButton = document.getElementById('scrollBtn');

// ============================================================
// EVENT LISTENERS - NAVIGATION & UI INTERACTIONS
// ============================================================

// Prevent dropdown menu from closing when clicked inside
dropdownMenu.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Prevent search input from closing when clicked inside
searchInput.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Toggle hamburger menu
hamburgerButton.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = dropdownMenu.classList.toggle('show');
  hamburgerButton.classList.toggle('drop', isOpen);
  searchButton.classList.remove('show');
  searchInput.classList.remove('show');
});

// Toggle search input
searchButton.addEventListener('click', (event) => {
  event.stopPropagation();
  dropdownMenu.classList.remove('show');
  searchInput.classList.toggle('show');
  hamburgerButton.classList.remove('drop');
  searchButton.classList.add('show');
});

// Toggle pages dropdown
dropdownPagesButton.addEventListener('click', () => {
  dropdownPagesButton.classList.toggle('show');
  dropdownPagesItem.classList.toggle('show');
});

// Close all menus when clicking outside
document.addEventListener('click', () => {
  searchInput.classList.remove('show');
  dropdownMenu.classList.remove('show');
  hamburgerButton.classList.remove('drop');
  searchButton.classList.remove('show');
  dropdownPagesItem.classList.remove('show');
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 9) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});

// ============================================================
// PRODUCT DATA
// ============================================================

const products = [
  // Mobile Accessories (8 items)
  {
    id: 1,
    name: "Wireless Fast Charger",
    category: "mobile-accessories",
    img: "mobile-wireless-fast-charger.png",
    price: 29.99,
    description: "Fast wireless charger for modern smartphones"
  },
  {
    id: 2,
    name: "High Capacity PowerBank",
    category: "mobile-accessories",
    img: "mobile-power-bank-20000mah.png",
    price: 39.99,
    description: "Large power bank for charging multiple devices"
  },
  {
    id: 3,
    name: "Matte Finish PhoneCase",
    category: "mobile-accessories",
    img: "mobile-phone-case-matte.png",
    price: 14.99,
    description: "Protective phone case with matte surface feel"
  },
  {
    isFeatured: true,
    id: 4,
    name: "Braided Type C Cable",
    category: "mobile-accessories",
    img: "mobile-type-c-cable-braided.png",
    price: 9.99,
    description: "Durable cable supporting fast charge and data"
  },
  {
    id: 5,
    name: "True Wireless Earbuds",
    category: "mobile-accessories",
    img: "mobile-wireless-earbuds.png",
    price: 49.99,
    description: "Compact earbuds delivering clean sound output"
  },
  {
    id: 6,
    name: "Adjustable Phone Stand",
    category: "mobile-accessories",
    img: "mobile-phone-stand-adjustable.png",
    price: 12.99,
    description: "Flexible stand perfect for desk video viewing"
  },
  {
    id: 7,
    name: "Tempered Glass Guard",
    category: "mobile-accessories",
    img: "mobile-screen-protector-glass.png",
    price: 7.99,
    description: "Clear glass protection against scratches impact"
  },
  {
    isFeatured: true,
    id: 8,
    name: "Car Phone Holder",
    category: "mobile-accessories",
    img: "mobile-car-phone-holder.png",
    price: 15.99,
    description: "Secure phone mount for safe driving usage"
  },
  
  // Audio (3 items)
  {
    id: 9,
    name: "Over Ear Gaming Head",
    category: "audio",
    img: "audio-gaming-headset.png",
    price: 59.99,
    description: "Immersive headset built for long gaming hours"
  },
  {
    isFeatured: true,
    id: 10,
    name: "Classic Wired Earph",
    category: "audio",
    img: "audio-wired-earphones.png",
    price: 12.99,
    description: "Lightweight earphones with balanced sound tone"
  },
  {
    id: 11,
    name: "true wireless earbuds",
    category: "audio",
    img: "audio-true-wireless-earbuds.png",
    price: 45.99,
    description: "true wireless earbuds delivering deep bass audio"
  },
  
  // Computing (6 items)
  {
    id: 12,
    name: "High Speed ExternalSSD",
    category: "computing",
    img: "computing-external-ssd.png",
    price: 89.99,
    description: "Fast external storage for work files backups"
  },
  {
    id: 13,
    name: "Multi Port USB Hub",
    category: "computing",
    img: "computing-usb-hub-multiport.png",
    price: 24.99,
    description: "Expand laptop connectivity using single hub"
  },
  {
    id: 14,
    name: "Slim Modern LaptopPC",
    category: "computing",
    img: "computing-laptop-modern.png",
    price: 899.99,
    description: "Modern laptop designed for productivity tasks"
  },
  {
    id: 15,
    name: "Wireless Keyboard Pro",
    category: "computing",
    img: "computing-wireless-keyboard.png",
    price: 34.99,
    description: "Comfortable keyboard built for daily typing"
  },
  {
    id: 16,
    name: "Ergonomic Mouse Pro",
    category: "computing",
    img: "computing-wireless-mouse.png",
    price: 19.99,
    description: "Smooth mouse offering precise cursor control"
  },
  {
    id: 17,
    name: "Adjustable LaptopStand",
    category: "computing",
    img: "computing-laptop-stand.png",
    price: 29.99,
    description: "Elevated stand improves airflow posture use"
  },
  
  // Smart Home (2 items)
  {
    isFeatured: true,
    id: 18,
    name: "WiFiRouter",
    category: "smart-home",
    img: "smart-home-wifi-router.png",
    price: 79.99,
    description: "Reliable router ensuring stable home network"
  },
  {
    isFeatured: true,
    id: 19,
    name: "Smart Motion Sensor",
    category: "smart-home",
    img: "smart-home-motion-sensor.png",
    price: 24.99,
    description: "Motion sensor built for smart <br> security use"
  },
  
  // Gaming (3 items)
  {
    id: 20,
    name: "Mechanical GamingKeys",
    category: "gaming",
    img: "gaming-mechanical-keyboard.png",
    price: 69.99,
    description: "Mechanical keyboard designed for gamers"
  },
  {
    id: 21,
    name: "Gaming Headset Pro",
    category: "gaming",
    img: "gaming-headset.png",
    price: 64.99,
    description: "Gaming headset delivering clear mic sound"
  },
  {
    id: 22,
    name: "smart Gaming controller",
    category: "gaming",
    img: "gaming-controller.png",
    price: 29.99,
    description: "High precision gaming controller built for fast gaming"
  },
  
  // Special Offers (4 items)
  {
    isSpecial: true,
    id: 23,
    name: "Bluetooth Headset",
    originalPrice: 89.99,
    price: 49.99,
    discount: 44,
    img: "wireless-bluetooth-headphones.png",
    rating: 4.5,
    inStock: true,
    description: "Wireless headphones designed for music and calls"
  },
  {
    isSpecial: true,
    id: 24,
    name: "Smart Fitness Watch",
    originalPrice: 199.99,
    price: 129.99,
    discount: 35,
    img: "smart-fitness-watch.png",
    rating: 4.7,
    inStock: true,
    description: "Smart watch built for daily fitness tracking"
  },
  {
    isSpecial: true,
    id: 25,
    name: "Portable Power Bank",
    originalPrice: 59.99,
    price: 34.99,
    discount: 42,
    img: "power-bank-20000mah.png",
    rating: 4.3,
    inStock: true,
    description: "Portable power bank for fast device charging"
  },
  {
    isSpecial: true,
    id: 26,
    name: "USB HD Webcam",
    originalPrice: 149.99,
    price: 89.99,
    discount: 40,
    img: "4k-webcam-with-microphone.png",
    rating: 4.6,
    inStock: false,
    description: "USB webcam built for video calls and meetings"
  }
];
    let currentProduct = products.filter(product => !product.isFeatured && !product.isSpecial)
// ============================================================
// PRODUCT RENDERING FUNCTIONS
// ============================================================

function renderProducts(productList) {
  productGrid.innerHTML = '';
  
  productList.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product_card');
    productCard.innerHTML = `
      <div class="product_img">
        <img class='Product_img' src="${product.img}" alt="${product.name}">
      </div>
      <div class="product_info">
        <h1 class='product_title'>${product.name}</h1> 
        <p>${product.description}</p> 
        <div class="card_btns">
          <button type="button">
            <span class="price">${product.price}</span>
            <span>$</span>
          </button> 
          <button onclick="addItem(${product.id})" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg> 
            <span>add to cart</span>
          </button>
        </div> 
      </div>
    `;
    productGrid.appendChild(productCard);
  });
}

// Initial render: show non-featured and non-special products
renderProducts(currentProduct);

// ============================================================
// PRODUCT FILTERING
// ============================================================

const filterButtons = document.querySelectorAll('.fltr-btn');
const filter_input = document.querySelector('.input_fltr')

function initializeProductFilter() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get category from button data attribute
      
      // Filter products by category
  const category = button.dataset.filter;
  const filteredProducts = category === "All" ?
    products :
    products.filter(product => product.category === category);
  
  // Further filter out featured and special products
  const finalFilteredProducts = filteredProducts.filter(
    product => !product.isFeatured && !product.isSpecial
  );
      
      // Display no products message if empty
      if (finalFilteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="no_product_msg">No products match with your filter</div>';
        return;
      }
      currentProduct = finalFilteredProducts;
      renderProducts(finalFilteredProducts);
    });
  });
}

initializeProductFilter();

// ============================================================
// CART FUNCTIONALITY
// ============================================================

// Initialize cart from localStorage
let cartArray = JSON.parse(localStorage.getItem('cartArr')) || [];

// Save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem('cartArr', JSON.stringify(cartArray));
}

// Add item to cart
function addItem(productId) {
  const product = products.find(p => p.id === productId);
  const existingProduct = cartArray.find(item => item.id === productId);
  
  if (existingProduct) {
    existingProduct.qty++;
  } else {
    cartArray.push({ ...product, qty: 1 });
  }
  
  saveCartToLocalStorage();
  refreshCart();
}

// Change item quantity in cart
function changeQuantity(productId, amount) {
  const item = cartArray.find(i => i.id === productId);
  if (!item) return;
  
  item.qty += amount;
  
  if (item.qty <= 0) {
    cartArray = cartArray.filter(i => i.id !== productId);
  }
  
  saveCartToLocalStorage();
  refreshCart();
}

// Remove item from cart
function removeItem(productId) {
  cartArray = cartArray.filter(i => i.id !== productId);
  saveCartToLocalStorage();
  refreshCart();
}

// Refresh cart UI
function refreshCart() {
  // Update cart badge
  const totalItems = cartArray.reduce((total, item) => total + item.qty, 0);
  const badge = document.getElementById('badge');
  badge.textContent = totalItems;
  
  // Get cart container
  const cartContainer = document.querySelector('.cart_content');
  
  // Show empty cart message if no items
  if (cartArray.length === 0) {
    cartContainer.innerHTML = '<h1 class="no_cart">You have no cart items!</h1>';
    return;
  }
  
  // Generate cart items HTML
  const cartItemsHTML = cartArray.map(item => `
    <div class='cart-box'>
      <img src="${item.img}" alt="${item.name}">  
      <div class="cart_detainl">  
        <h2 class="cart_box_title">${item.name}</h2>  
        <span class="cart_price">${item.price}</span>  
        <div class="cart-quantity">  
          <button onclick='changeQuantity(${item.id}, -1)' class="decrement">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="#000000" />  
            </svg>
          </button>  
          <span class="numbor">${item.qty}</span>  
          <button onclick='changeQuantity(${item.id}, 1)' class="incremant">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  
              <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />  
            </svg>
          </button>  
        </div>  
      </div>  
      <button onclick='removeItem(${item.id})' class="remove-cart">  
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  
          <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />  
          <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />  
          <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />  
          <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />  
          <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />  
        </svg>  
      </button>
    </div>
  `).join('');
  
  cartContainer.innerHTML = cartItemsHTML;
  
  // Calculate and display total price
  const totalPrice = cartArray.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let total__p = document.querySelector('.totalP')
  total__p.textContent = totalPrice.toFixed(2) + '$';
}

// Initialize cart on page load
saveCartToLocalStorage();
refreshCart();

// ============================================================
// CART UI INTERACTIONS
// ============================================================

// Open cart
cartIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    cart.classList.add('show');
    icon.classList.add('show');
    navBar.classList.add('scrolled');
  });
});

// Close cart
closeCartButton.addEventListener('click', () => {
  cartIcon.forEach(icon => icon.classList.remove('show'));
  cart.classList.remove('show');
});

// ============================================================
// FEATURED PRODUCTS
// ============================================================

function renderFeaturedProducts(featuredProducts) {
  
  const featuredHTML = featuredProducts.map(product => `
    <div class='featurBox'>
      <span class='icnFeatur'>Feature</span>
      <div class="product_img">
        <img class='Product_img' src="${product.img}" alt="${product.name}">
      </div>
      <div class="product_info">
        <h1 class='featur_product_title'>${product.name}</h1> 
        <p>${product.description}</p> 
        <div class="card_btns">
          <button type="button">
            <span class="price">${product.price}</span>
            <span>$</span>
          </button> 
          <button onclick="addItem(${product.id})" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg> 
            <span>add to cart</span>
          </button>
        </div> 
      </div>
    </div>
  `).join('');
  
  featureGrid.innerHTML = featuredHTML;
}
let featureproduct = products.filter(product => product.isFeatured)
renderFeaturedProducts(featureproduct );

// ============================================================
// SPECIAL OFFER PRODUCTS
// ============================================================

function renderSpecialOffers(specialProducts) {
  
  const specialHTML = specialProducts.map(item => `
    <div class='spacialBox'>
      <span class='discount'>${item.discount}%</span>
      <div class="product_img">
        <img class='Product_img' src="${item.img}" alt="${item.name}">
      </div>
      <div class="product_info">
        <h1 class='spacial_product_title'>${item.name}</h1>
        <p>${item.description}</p>
        <div class="spacial_btns">
          <div>
            <span class="discount_price">${item.originalPrice}$</span>
          </div>
          <div class="prc_add_btn card_btns">
            <button type="button">
              <span style="border: none;" class="price spcal">${item.price}</span>
              <span>$</span>
            </button>
            <button onclick="addItem(${item.id})" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg> 
              <span>add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  specialGrid.innerHTML = specialHTML;
}
let spacialProduct = products.filter(product => product.isSpecial);
renderSpecialOffers(spacialProduct);

// ============================================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================================

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
let modal_overly = document.querySelector('.modal_overly')
function showModal(){
  modal_overly.classList.add('active')
}
function closeModal(){
  modal_overly.classList.remove('active')
}
      filter_input.addEventListener('input', () => {
        let value = filter_input.value.toLowerCase().trim();
        let fltr = currentProduct.filter(p => p.name.toLowerCase().includes(value));
        
        let featureFltr = featureproduct.filter(p => p.name.toLowerCase().includes(value));
        
        let spacial_fltr = spacialProduct.filter(p => p.name.toLowerCase().includes(value));
        if (fltr.length === 0) {
          productGrid.innerHTML = '<div class="no_product_msg">No products match with your filter</div>'
        } else {
          renderProducts(fltr)
        }
        if (featureFltr.length === 0) {
          featureGrid.innerHTML = '<div class="no_product_msg">No products match with your filter</div>'
        } else {
          renderFeaturedProducts(featureFltr)
        }
        if (spacial_fltr.length === 0) {
          specialGrid.innerHTML = '<div class="no_product_msg">No products match with your filter</div>'
        } else {
          renderSpecialOffers(spacial_fltr)
        }
})
let yearFotter = document.querySelector('.yearFotter');
yearFotter.textContent = new Date().getFullYear();
