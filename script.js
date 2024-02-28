const products = [
  {
    name: "Sony Playstation 5",
    url: "https://i.ibb.co/zHmZnWx/playstation-5.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "https://i.ibb.co/rFFMDH7/samsung-galaxy.png",
    category: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "https://i.ibb.co/mhm1hLq/cannon-eos-camera.png",
    category: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "https://i.ibb.co/LS9TDLN/sony-a7-camera.png",
    category: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "https://i.ibb.co/QHgFnHk/lg-tv.png",
    category: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "https://i.ibb.co/L0L9SdG/nintendo-switch.png",
    category: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "https://i.ibb.co/C8rBVdT/xbox-series-x.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "https://i.ibb.co/Pj1nm4B/samsung-tv.png",
    category: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "https://i.ibb.co/5F58zmH/google-pixel.png",
    category: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "https://i.ibb.co/5Wy3RZ9/sony-zv1f-camera.png",
    category: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "https://i.ibb.co/FxM6rXq/toshiba-tv.png",
    category: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "https://i.ibb.co/5vc7J6s/iphone-14.png",
    category: "smartphones",
    price: 999.99,
  },
];

// Select DOM Elements
const productsWrapper = document.getElementById("products-wrapper");
const checkboxes = document.querySelectorAll(".check");
const filtersContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

// Init cart item count
let cartItemCount = 0;

// Init product element array
const productElements = [];

// Loop over products & create an element
products.forEach((product) => {
  const productElement = createProductElement(product);

  productElements.push(product);

  productsWrapper.appendChild(productElement);
});

// Create product element
function createProductElement(product) {
  const productElement = document.createElement("div");

  productElement.className = "item space-y-2";

  // With "group" class we can use "group-hover" in the button to make the button visible when image hovered over
  productElement.innerHTML = `
  <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">

    <img class="w-full h-full object-cover" src="${product.url}" alt="${
    product.name
  }">
    <button
      class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
      Add To Cart
    </button>
  </div>
  <p class="text-xl">${product.name}</p>
  <!-- Use toLocalString() so comma added in thousands -->
  <strong>$${product.price.toLocaleString()}</strong>
  `;

  // Add EventListener
  productElement.querySelector(".status").addEventListener("click", updateCart);

  return productElement;
}

// Add or remove item from cart
function updateCart(e) {
  const statusElement = e.target;

  if (statusElement.classList.contains("added")) {
    // Remove from cart

    statusElement.classList.remove("added");
    // Update button text
    statusElement.innerText = "Add To Cart";
    // Remove original button color
    statusElement.classList.remove("bg-red-600");
    statusElement.classList.add("bg-gray-800");

    // Reduce cart item number
    cartItemCount--;
  } else {
    // Add to cart
    statusElement.classList.add("added");
    // Update button text
    statusElement.innerText = "Remove From Cart";
    // Remove original button color
    statusElement.classList.remove("bg-gray-800");
    statusElement.classList.add("bg-red-600");

    cartItemCount++;
  }

  // Update cart item count
  cartCount.innerText = cartItemCount.toString();
}
