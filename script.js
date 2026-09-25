/* =========================================================
   SHOPLY — script.js
   Vanilla JS. No frameworks. Organized into clear sections.
   ========================================================= */

/* ---------------------------------------------------------
   1. PRODUCT DATA
   --------------------------------------------------------- */

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    brand: "Apple",
    price: 799.0,
    oldPrice: null,
    rating: 4.6,
    reviews: 142,
    image: "images/products/laptop.png",
    description:
      "A powerful, ultra-thin laptop built for work and play, with a fast processor and all-day battery life.",
    stock: 14,
    colors: ["#2b2f4a", "#c9b8ff", "#ffffff"],
  },
  {
    id: 2,
    name: "Gaming Mouse",
    category: "Electronics",
    brand: "Samsung",
    price: 24.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 88,
    image: "images/products/gaming-mouse.png",
    description:
      "An ergonomic gaming mouse with adjustable DPI and a smooth, responsive scroll wheel.",
    stock: 40,
    colors: ["#2b2f4a", "#7137ff"],
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Electronics",
    brand: "Sony",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.4,
    reviews: 201,
    image: "images/products/bluetooth-speaker.png",
    description:
      "A compact wireless speaker with rich bass and up to 12 hours of playtime on a single charge.",
    stock: 25,
    colors: ["#2b2f4a", "#ffffff", "#ff6ec7"],
  },
  {
    id: 4,
    name: "iPhone 14",
    category: "Electronics",
    brand: "Apple",
    price: 699.0,
    oldPrice: null,
    rating: 4.8,
    reviews: 356,
    image: "images/products/iphone.png",
    description:
      "A sleek smartphone with an advanced camera system and all-day battery life.",
    stock: 9,
    colors: ["#2b2f4a", "#ffffff", "#7137ff", "#ff6ec7"],
  },
  {
    id: 5,
    name: "AirPods",
    category: "Electronics",
    brand: "Apple",
    price: 119.0,
    oldPrice: 149.0,
    rating: 4.6,
    reviews: 512,
    image: "images/products/airpods.png",
    description:
      "True wireless earbuds with active noise cancellation and a compact charging case.",
    stock: 30,
    colors: ["#ffffff"],
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    brand: "Samsung",
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.5,
    reviews: 128,
    image: "images/products/smart-watch.png",
    description:
      "Track your workouts, heart rate and notifications with this lightweight smart watch.",
    stock: 22,
    colors: ["#2b2f4a", "#ffffff", "#7137ff"],
  },
  {
    id: 7,
    name: "Camera Lens",
    category: "Electronics",
    brand: "Canon",
    price: 149.0,
    oldPrice: null,
    rating: 4.7,
    reviews: 64,
    image: "images/products/camera-lens.svg",
    description:
      "A versatile 50mm prime lens for sharp, professional-looking photography.",
    stock: 11,
    colors: ["#2b2f4a"],
  },
  {
    id: 8,
    name: "Keyboard",
    category: "Electronics",
    brand: "Samsung",
    price: 49.0,
    oldPrice: null,
    rating: 4.2,
    reviews: 77,
    image: "images/products/keyboard.png",
    description:
      "A responsive mechanical keyboard with per-key backlighting for work or gaming.",
    stock: 33,
    colors: ["#2b2f4a", "#ffffff"],
  },
  {
    id: 9,
    name: "DSLR Camera",
    category: "Electronics",
    brand: "Canon",
    price: 499.0,
    oldPrice: null,
    rating: 4.7,
    reviews: 95,
    image: "images/products/dslr-camera.png",
    description:
      "A high-resolution DSLR camera with interchangeable lenses for stunning photos.",
    stock: 7,
    colors: ["#2b2f4a"],
  },
  {
    id: 10,
    name: "Sneakers",
    category: "Fashion",
    brand: "Generic",
    price: 58.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 220,
    image: "images/products/sneakers.png",
    description:
      "Lightweight everyday sneakers with a cushioned sole and breathable mesh upper.",
    stock: 50,
    colors: ["#ffffff", "#2b2f4a"],
  },
  {
    id: 11,
    name: "Backpack",
    category: "Accessories",
    brand: "Generic",
    price: 29.99,
    oldPrice: null,
    rating: 4.8,
    reviews: 75,
    image: "images/products/backpack.png",
    description:
      "A durable, water-resistant backpack with a padded laptop sleeve and multiple pockets.",
    stock: 41,
    colors: ["#2b2f4a", "#7137ff"],
  },
  {
    id: 12,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 89.99,
    oldPrice: 129.99,
    rating: 4.6,
    reviews: 128,
    image: "images/products/wireless-headphones.png",
    description:
      "High quality wireless headphones with noise cancellation and deep bass.",
    stock: 18,
    colors: ["#15171c", "#ffffff", "#7137ff", "#1f2a4a"],
    colorImages: {
      "#15171c": "images/products/headphones-black.png",
      "#ffffff": "images/products/headphones-white.png",
      "#7137ff": "images/products/headphones-purple.png",
      "#1f2a4a": "images/products/headphones-navy.png",
    },
  },
];

const featuredProductIds = [6, 9, 10, 11]; // Smart Watch, DSLR Camera, Sneakers, Backpack

const categoryMeta = [
  { name: "Electronics", image: "images/categories/electronics.svg", count: 120 },
  { name: "Fashion", image: "images/categories/fashion.png", count: 85 },
  { name: "Home & Kitchen", image: "images/categories/home-kitchen.png", count: 60 },
  { name: "Beauty", image: "images/categories/beauty.png", count: 40 },
  { name: "Accessories", image: "images/categories/accessories.png", count: 70 },
  { name: "Sports", image: "images/categories/sports.png", count: 30 },
];

/* ---------------------------------------------------------
   2. STATE
   --------------------------------------------------------- */

const CART_KEY = "shoplyCart";
const WISHLIST_KEY = "shoplyWishlist";

let cart = loadFromStorage(CART_KEY, []); // [{id, qty}]
let wishlist = loadFromStorage(WISHLIST_KEY, []); // [id, id, ...]

let currentProductId = null;
let currentQty = 1;
let currentColor = null;

const shopFilters = {
  category: "All",
  maxPrice: 800,
  minRating: 0,
  brands: [],
  search: "",
  sort: "popular",
};

/* ---------------------------------------------------------
   3. UTILITIES
   --------------------------------------------------------- */

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

function formatPrice(value) {
  return "$" + Number(value).toFixed(2);
}

function findProduct(id) {
  return products.find((p) => p.id === Number(id));
}

function renderStars(rating) {
  const full = Math.round(rating);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= full ? "★" : "☆";
  }
  return `<span class="stars">${html}</span>`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

function setImageFallback(imgEl) {
  imgEl.addEventListener("error", function handler() {
    imgEl.removeEventListener("error", handler);
    imgEl.src = "images/products/placeholder.svg";
  });
}

/* ---------------------------------------------------------
   4. NAVIGATION (page switching)
   --------------------------------------------------------- */

function goToPage(pageName, options) {
  options = options || {};

  document.querySelectorAll(".page").forEach((section) => {
    section.classList.toggle("active", section.id === "page-" + pageName);
  });

  document.querySelectorAll(".main-nav a[data-page], .mobile-nav a[data-page]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-page") === pageName);
  });

  closeMobileMenu();
  closeMobileFilters();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageName === "shop") {
    if (options.category) {
      shopFilters.category = options.category;
      syncShopCategoryUI();
    }
    if (options.search !== undefined) {
      shopFilters.search = options.search;
    }
    applyShopFilters();
  }

  if (pageName === "product" && options.id) {
    openProductDetail(options.id);
  }

  if (pageName === "cart") {
    renderCart();
  }

  if (pageName === "deals") {
    renderDeals();
  }
}

function closeMobileMenu() {
  document.querySelector(".mobile-nav")?.classList.remove("open");
  document.getElementById("hamburgerBtn")?.classList.remove("open");
}

function closeMobileFilters() {
  document.getElementById("shopSidebar")?.classList.remove("open");
}

/* ---------------------------------------------------------
   5. RENDERING — PRODUCT CARDS & GRIDS
   --------------------------------------------------------- */

function productCardHTML(product) {
  const isWished = wishlist.includes(product.id);
  const oldPriceHTML = product.oldPrice
    ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>`
    : "";
  const discountHTML = product.oldPrice
    ? `<span class="discount-badge">-${Math.round(
        (1 - product.price / product.oldPrice) * 100
      )}%</span>`
    : "";

  return `
    <div class="product-card" data-id="${product.id}">
      ${discountHTML}
      <button class="wishlist-btn ${isWished ? "active" : ""}" data-id="${product.id}" aria-label="Toggle wishlist">
        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 20.5l-1.4-1.3C5.3 14.6 2 11.6 2 7.9 2 5.1 4.2 3 7 3c1.6 0 3.1.8 4 2 0.9-1.2 2.4-2 4-2 2.8 0 5 2.1 5 4.9 0 3.7-3.3 6.7-8.6 11.3L12 20.5z"/></svg>
      </button>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card-body">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">${renderStars(product.rating)} <span class="review-count">(${product.reviews})</span></div>
        <div class="product-price-row">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${oldPriceHTML}
        </div>
      </div>
    </div>
  `;
}

function renderGrid(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map(productCardHTML).join("");
  container.querySelectorAll("img").forEach(setImageFallback);
}

function renderFeatured() {
  const list = featuredProductIds.map(findProduct).filter(Boolean);
  renderGrid("featuredGrid", list);
}

function renderDeals() {
  const list = products.filter((p) => p.oldPrice);
  renderGrid("dealsGrid", list);
  const empty = document.getElementById("dealsEmptyState");
  if (empty) empty.hidden = list.length > 0;
}

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;
  grid.innerHTML = categoryMeta
    .map(
      (cat) => `
      <div class="category-card" data-category="${cat.name}">
        <div class="category-image"><img src="${cat.image}" alt="${cat.name}" loading="lazy"></div>
        <h3>${cat.name}</h3>
        <p>${cat.count} Items</p>
      </div>
    `
    )
    .join("");
}

/* ---------------------------------------------------------
   6. SHOP FILTERING & SORTING
   --------------------------------------------------------- */

function applyShopFilters() {
  let list = products.slice();

  if (shopFilters.category && shopFilters.category !== "All") {
    list = list.filter((p) => p.category === shopFilters.category);
  }

  list = list.filter((p) => p.price <= shopFilters.maxPrice);

  if (shopFilters.minRating > 0) {
    list = list.filter((p) => p.rating >= shopFilters.minRating);
  }

  if (shopFilters.brands.length > 0) {
    list = list.filter((p) => shopFilters.brands.includes(p.brand));
  }

  if (shopFilters.search.trim() !== "") {
    const q = shopFilters.search.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  switch (shopFilters.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      list.sort((a, b) => b.id - a.id);
      break;
    default:
      list.sort((a, b) => b.reviews - a.reviews);
  }

  renderGrid("shopGrid", list);

  const heading = document.getElementById("shopResultsHeading");
  if (heading) heading.textContent = `All Products (${list.length})`;

  const emptyState = document.getElementById("shopEmptyState");
  const grid = document.getElementById("shopGrid");
  if (emptyState && grid) {
    emptyState.hidden = list.length > 0;
    grid.hidden = list.length === 0;
  }
}

function syncShopCategoryUI() {
  document.querySelectorAll('#shopCategoryList input[type="radio"]').forEach((input) => {
    input.checked = input.value === shopFilters.category;
  });
  document.querySelectorAll("#homeCategoryList li").forEach((li) => {
    li.classList.toggle("active", li.dataset.category === shopFilters.category);
  });
}

/* ---------------------------------------------------------
   7. PRODUCT DETAIL PAGE
   --------------------------------------------------------- */

function openProductDetail(id) {
  const product = findProduct(id);
  if (!product) return;

  currentProductId = product.id;
  currentQty = 1;
  currentColor = product.colors ? product.colors[0] : null;

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productStars").innerHTML = renderStars(product.rating);
  document.getElementById("productReviews").textContent = `(${product.reviews} reviews)`;
  document.getElementById("productPrice").textContent = formatPrice(product.price);
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("qtyValue").textContent = currentQty;

  const oldPriceEl = document.getElementById("productOldPrice");
  const discountEl = document.getElementById("productDiscount");
  if (product.oldPrice) {
    oldPriceEl.textContent = formatPrice(product.oldPrice);
    oldPriceEl.hidden = false;
    const pct = Math.round((1 - product.price / product.oldPrice) * 100);
    discountEl.textContent = `-${pct}%`;
    discountEl.hidden = false;
  } else {
    oldPriceEl.hidden = true;
    discountEl.hidden = true;
  }

  const mainImage = document.getElementById("productMainImage");
  const initialSrc =
    product.colorImages && product.colorImages[currentColor]
      ? product.colorImages[currentColor]
      : product.image;
  mainImage.src = initialSrc;
  mainImage.alt = product.name;
  setImageFallback(mainImage);

  const thumbs = document.getElementById("productThumbnails");
  thumbs.innerHTML = new Array(5)
    .fill(product.image)
    .map(
      (src, i) =>
        `<button class="thumb-btn ${i === 0 ? "active" : ""}" data-src="${src}">
           <img src="${src}" alt="${product.name} thumbnail ${i + 1}">
         </button>`
    )
    .join("");
  thumbs.querySelectorAll("img").forEach(setImageFallback);

  const colorWrap = document.getElementById("productColors");
  const colorOptions = document.getElementById("colorOptions");
  if (product.colors && product.colors.length) {
    colorWrap.hidden = false;
    colorOptions.innerHTML = product.colors
      .map(
        (c, i) =>
          `<button class="color-dot ${i === 0 ? "active" : ""}" style="background:${c}" data-color="${c}" aria-label="Color option"></button>`
      )
      .join("");
  } else {
    colorWrap.hidden = true;
  }

  updateWishlistButtonState();

  const breadcrumb = document.getElementById("productBreadcrumb");
  breadcrumb.innerHTML = `
    <a href="#" data-page="home">Home</a>
    <span>&gt;</span>
    <a href="#" class="breadcrumb-category" data-category="${product.category}">${product.category}</a>
    <span>&gt;</span>
    <span>${product.name}</span>
  `;
}

function updateWishlistButtonState() {
  const btn = document.getElementById("productWishlistBtn");
  if (!btn || !currentProductId) return;
  const isWished = wishlist.includes(currentProductId);
  btn.classList.toggle("active", isWished);
  btn.querySelector(".wishlist-label").textContent = isWished
    ? "Added to Wishlist"
    : "Add to Wishlist";
}

/* ---------------------------------------------------------
   8. CART
   --------------------------------------------------------- */

function addToCart(id, qty) {
  qty = qty || 1;
  const existing = cart.find((item) => item.id === Number(id));
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: Number(id), qty: qty });
  }
  saveCart();
  updateCartBadge();
  showToast("Added to cart");
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== Number(id));
  saveCart();
  updateCartBadge();
  renderCart();
}

function changeCartQty(id, delta) {
  const item = cart.find((i) => i.id === Number(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartBadge();
  renderCart();
}

function cartTotals() {
  const items = cart
    .map((item) => ({ product: findProduct(item.id), qty: item.qty }))
    .filter((i) => i.product);

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 9.99;
  const discount = subtotal > 150 ? 10 : 0;
  const total = Math.max(subtotal + shipping - discount, 0);

  return { items, subtotal, itemCount, shipping, discount, total };
}

function updateCartBadge() {
  const { itemCount } = cartTotals();
  document.querySelectorAll(".cart-badge").forEach((badge) => {
    badge.textContent = itemCount;
    badge.hidden = itemCount === 0;
  });
}

function renderCart() {
  const { items, subtotal, itemCount, shipping, discount, total } = cartTotals();

  const title = document.getElementById("cartTitle");
  if (title) title.textContent = `Your Cart (${itemCount})`;

  const listEl = document.getElementById("cartItemsList");
  const layout = document.querySelector(".cart-layout");
  const emptyState = document.getElementById("emptyCartState");

  if (items.length === 0) {
    if (layout) layout.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (layout) layout.hidden = false;
  if (emptyState) emptyState.hidden = true;

  listEl.innerHTML = items
    .map(
      (i) => `
      <div class="cart-item" data-id="${i.product.id}">
        <div class="cart-item-image"><img src="${i.product.image}" alt="${i.product.name}"></div>
        <div class="cart-item-info">
          <h4>${i.product.name}</h4>
          <p class="cart-item-price">${formatPrice(i.product.price)}</p>
        </div>
        <div class="cart-qty-controls">
          <button class="qty-btn" data-action="decrease" data-id="${i.product.id}">-</button>
          <span>${i.qty}</span>
          <button class="qty-btn" data-action="increase" data-id="${i.product.id}">+</button>
        </div>
        <div class="cart-item-total">${formatPrice(i.product.price * i.qty)}</div>
        <button class="cart-remove-btn" data-id="${i.product.id}" aria-label="Remove item">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-9 0l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13"/></svg>
        </button>
      </div>
    `
    )
    .join("");

  listEl.querySelectorAll("img").forEach(setImageFallback);

  document.getElementById("subtotalLabel").textContent = `Subtotal (${itemCount} items)`;
  document.getElementById("subtotalValue").textContent = formatPrice(subtotal);
  document.getElementById("shippingValue").textContent = shipping === 0 ? "$0.00" : formatPrice(shipping);
  document.getElementById("discountValue").textContent = discount === 0 ? "-$0.00" : `-${formatPrice(discount)}`;
  document.getElementById("totalValue").textContent = formatPrice(total);
}

/* ---------------------------------------------------------
   9. WISHLIST
   --------------------------------------------------------- */

function toggleWishlist(id) {
  id = Number(id);
  const index = wishlist.indexOf(id);
  if (index === -1) {
    wishlist.push(id);
    showToast("Added to wishlist");
  } else {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  }
  saveWishlist();
  refreshWishlistButtons();
}

function refreshWishlistButtons() {
  document.querySelectorAll(".wishlist-btn[data-id]").forEach((btn) => {
    const id = Number(btn.getAttribute("data-id"));
    btn.classList.toggle("active", wishlist.includes(id));
  });
  updateWishlistButtonState();
}

/* ---------------------------------------------------------
   10. EVENT WIRING
   --------------------------------------------------------- */

function initHeaderAndNav() {
  document.body.addEventListener("click", (e) => {
    const navLink = e.target.closest("[data-page]");
    if (navLink) {
      e.preventDefault();
      const page = navLink.getAttribute("data-page");
      if (page === "product") return; // handled elsewhere (needs an id)
      goToPage(page);
    }
  });

  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.querySelector(".mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  }

  // Search (header) — live search jumps to Shop page and filters
  const searchInputs = document.querySelectorAll(".header-search input");
  searchInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      shopFilters.search = value;
      if (value.trim() !== "") {
        goToPage("shop", { search: value });
      } else {
        applyShopFilters();
      }
    });
  });
}

function initProductCardDelegation() {
  document.body.addEventListener("click", (e) => {
    const wishlistBtn = e.target.closest(".wishlist-btn[data-id]");
    if (wishlistBtn) {
      e.stopPropagation();
      toggleWishlist(wishlistBtn.getAttribute("data-id"));
      return;
    }

    const card = e.target.closest(".product-card[data-id]");
    if (card) {
      goToPage("product", { id: card.getAttribute("data-id") });
      return;
    }

    const categoryCard = e.target.closest(".category-card[data-category]");
    if (categoryCard) {
      goToPage("shop", { category: categoryCard.getAttribute("data-category") });
      return;
    }

    const breadcrumbCategory = e.target.closest(".breadcrumb-category");
    if (breadcrumbCategory) {
      e.preventDefault();
      goToPage("shop", { category: breadcrumbCategory.getAttribute("data-category") });
    }
  });
}

function initHeroAndViewAll() {
  document.getElementById("heroShopBtn")?.addEventListener("click", () => goToPage("shop"));
}

function initHomeSidebar() {
  document.querySelectorAll("#homeCategoryList li[data-category]").forEach((li) => {
    li.addEventListener("click", () => {
      goToPage("shop", { category: li.getAttribute("data-category") });
    });
  });

  const homePriceRange = document.getElementById("homePriceRange");
  const homePriceValue = document.getElementById("homePriceValue");
  if (homePriceRange) {
    homePriceRange.addEventListener("input", () => {
      homePriceValue.textContent = "$" + homePriceRange.value;
    });
    homePriceRange.addEventListener("change", () => {
      goToPage("shop");
      const shopRange = document.getElementById("shopPriceRange");
      if (shopRange) {
        shopRange.value = homePriceRange.value;
        shopFilters.maxPrice = Number(homePriceRange.value);
        document.getElementById("shopPriceValue").textContent = "$" + homePriceRange.value;
        applyShopFilters();
      }
    });
  }

  document.querySelectorAll('#homeRatingFilter input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      shopFilters.minRating = Number(input.value);
      goToPage("shop");
      syncShopRatingUI();
      applyShopFilters();
    });
  });
}

function syncShopRatingUI() {
  document.querySelectorAll('#shopRatingFilter input[type="radio"]').forEach((input) => {
    input.checked = Number(input.value) === shopFilters.minRating;
  });
}

function initShopFilters() {
  document.querySelectorAll('#shopCategoryList input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      shopFilters.category = input.value;
      syncShopCategoryUI();
      applyShopFilters();
    });
  });

  const shopPriceRange = document.getElementById("shopPriceRange");
  const shopPriceValue = document.getElementById("shopPriceValue");
  if (shopPriceRange) {
    shopPriceRange.addEventListener("input", () => {
      shopFilters.maxPrice = Number(shopPriceRange.value);
      shopPriceValue.textContent = "$" + shopPriceRange.value;
      applyShopFilters();
    });
  }

  document.querySelectorAll('#shopRatingFilter input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      shopFilters.minRating = Number(input.value);
      applyShopFilters();
    });
  });

  document.querySelectorAll('#shopBrandFilter input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", () => {
      shopFilters.brands = Array.from(
        document.querySelectorAll('#shopBrandFilter input[type="checkbox"]:checked')
      ).map((el) => el.value);
      applyShopFilters();
    });
  });

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      shopFilters.sort = sortSelect.value;
      applyShopFilters();
    });
  }

  const mobileFilterBtn = document.getElementById("mobileFilterBtn");
  const shopSidebar = document.getElementById("shopSidebar");
  if (mobileFilterBtn && shopSidebar) {
    mobileFilterBtn.addEventListener("click", () => {
      shopSidebar.classList.toggle("open");
    });
  }
  document.getElementById("closeFiltersBtn")?.addEventListener("click", closeMobileFilters);
}

function initProductDetailControls() {
  document.getElementById("qtyMinus").addEventListener("click", () => {
    if (currentQty > 1) currentQty--;
    document.getElementById("qtyValue").textContent = currentQty;
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    currentQty++;
    document.getElementById("qtyValue").textContent = currentQty;
  });

  document.getElementById("productThumbnails").addEventListener("click", (e) => {
    const btn = e.target.closest(".thumb-btn");
    if (!btn) return;
    document.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("productMainImage").src = btn.getAttribute("data-src");
  });

  document.getElementById("colorOptions").addEventListener("click", (e) => {
    const dot = e.target.closest(".color-dot");
    if (!dot) return;
    document.querySelectorAll(".color-dot").forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
    currentColor = dot.getAttribute("data-color");

    const product = findProduct(currentProductId);
    if (product && product.colorImages && product.colorImages[currentColor]) {
      const mainImage = document.getElementById("productMainImage");
      mainImage.src = product.colorImages[currentColor];
      setImageFallback(mainImage);
    }
  });

  document.getElementById("addToCartBtn").addEventListener("click", () => {
    if (currentProductId) addToCart(currentProductId, currentQty);
  });

  document.getElementById("buyNowBtn").addEventListener("click", () => {
    if (currentProductId) {
      addToCart(currentProductId, currentQty);
      goToPage("cart");
    }
  });

  document.getElementById("productWishlistBtn").addEventListener("click", () => {
    if (currentProductId) toggleWishlist(currentProductId);
  });
}

function initCartControls() {
  document.getElementById("cartItemsList").addEventListener("click", (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      const id = qtyBtn.getAttribute("data-id");
      const delta = qtyBtn.getAttribute("data-action") === "increase" ? 1 : -1;
      changeCartQty(id, delta);
      return;
    }
    const removeBtn = e.target.closest(".cart-remove-btn");
    if (removeBtn) {
      removeFromCart(removeBtn.getAttribute("data-id"));
    }
  });

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    const { items } = cartTotals();
    if (items.length === 0) return;
    showToast("Order placed! Thank you for shopping with Shoply.");
    cart = [];
    saveCart();
    updateCartBadge();
    renderCart();
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim().length < 2) {
      nameError.textContent = "Please enter your name.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    const successEl = document.getElementById("contactSuccess");
    if (valid) {
      successEl.hidden = false;
      form.reset();
      setTimeout(() => (successEl.hidden = true), 4000);
    } else {
      successEl.hidden = true;
    }
  });
}

/* ---------------------------------------------------------
   11. INIT
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderCategories();
  renderDeals();
  applyShopFilters();
  updateCartBadge();
  refreshWishlistButtons();

  initHeaderAndNav();
  initProductCardDelegation();
  initHeroAndViewAll();
  initHomeSidebar();
  initShopFilters();
  initProductDetailControls();
  initCartControls();
  initContactForm();

  console.log("Shoply loaded successfully!");
});
