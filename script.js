// ========================================================
// ShopPulse - Amazon & Flipkart Inspired E-Commerce Engine
// With 330+ Catalog, Comprehensive Login & Orders Tracking
// ========================================================

// 1. Initial Pre-Seeded Registered Users & Orders
const DEFAULT_USERS = [
  {
    name: "Vishal Gupta",
    email: "vishal@example.com",
    phone: "9876543210",
    password: "password123",
    membership: "ShopPulse Plus Member ⭐"
  },
  {
    name: "Rohit Sharma",
    email: "rohit@example.com",
    phone: "9123456780",
    password: "password123",
    membership: "VIP Prime Member ⭐"
  }
];

const DEFAULT_ORDERS = [
  {
    id: "#OD8492019482",
    date: "Oct 28, 2026",
    status: "Delivered",
    deliveryDate: "Oct 30, 2026",
    items: [
      {
        name: "Apple Watch Series 9 GPS 45mm Midnight Aluminum Case",
        quantity: 1,
        price: 389.00,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
      }
    ],
    total: "$389.00",
    address: "Flat 402, Sunshine Residency, Outer Ring Rd, Bengaluru - 560001"
  }
];

// Ensure fallback if products.js is not loaded
const catalogSource = (typeof products !== 'undefined' && Array.isArray(products) && products.length > 0)
  ? products
  : [];

// 2. Global State & LocalStorage Synchronization
let state = {
  products: [...catalogSource],
  filteredProducts: [...catalogSource],
  visibleLimit: 24, // 24 items per page for ultra smooth performance
  cart: JSON.parse(localStorage.getItem('shoppulse_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('shoppulse_wishlist')) || [],
  users: JSON.parse(localStorage.getItem('shoppulse_users')) || DEFAULT_USERS,
  currentUser: JSON.parse(localStorage.getItem('shoppulse_current_user')) || null,
  orders: JSON.parse(localStorage.getItem('shoppulse_orders')) || DEFAULT_ORDERS,
  pincode: localStorage.getItem('shoppulse_pincode') || '110001 (New Delhi)',
  activeCategory: 'All',
  maxPrice: 3500,
  minRating: 0,
  minDiscount: 0,
  inStockOnly: false,
  searchQuery: '',
  sortBy: 'featured',
  appliedCoupon: null,
  currentPdpProduct: null,
  checkoutStep: 1,
  selectedStarRating: 5,
  simulatedOtp: '1234',
  otpTarget: ''
};

// Available Promo Coupons
const VALID_COUPONS = {
  'SAVE20': { pct: 20, desc: 'Flat 20% Instant Discount' },
  'FIRST10': { flat: 10, desc: '$10 Off on your order' },
  'FLIPKART50': { flat: 50, minOrder: 200, desc: '$50 Off on orders above $200' }
};

let searchDebounceTimer = null;

// ========================================================
// INITIALIZATION
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // If catalog wasn't ready synchronously, reload from global
  if (state.products.length === 0 && typeof products !== 'undefined') {
    state.products = [...products];
    state.filteredProducts = [...products];
  }

  // Save default users if empty
  if (!localStorage.getItem('shoppulse_users')) {
    localStorage.setItem('shoppulse_users', JSON.stringify(state.users));
  }
  if (!localStorage.getItem('shoppulse_orders')) {
    localStorage.setItem('shoppulse_orders', JSON.stringify(state.orders));
  }

  renderHeaderState();
  applyFiltersAndSort();
  updateCartUI();
  updateWishlistCount();
  updateOrdersCount();

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    const searchWrap = document.querySelector('.search-container');
    if (searchWrap && !searchWrap.contains(e.target)) {
      hideAutocomplete();
    }

    const accountNav = document.getElementById('accountNavContainer');
    if (accountNav && !accountNav.contains(e.target)) {
      accountNav.classList.remove('open');
    }
  });
});

// Update Header User & Pincode Display
function renderHeaderState() {
  const greetingEl = document.getElementById('userGreeting');
  const accountSubEl = document.getElementById('userAccountSub');
  const avatarEl = document.getElementById('userAvatar');
  const pincodeEl = document.getElementById('headerPincode');
  
  // Dropdown header elements
  const dropdownName = document.getElementById('dropdownUserName');
  const dropdownEmail = document.getElementById('dropdownUserEmail');
  const dropdownSignInBtn = document.getElementById('dropdownSignInBtn');
  const logoutLink = document.getElementById('logoutLink');

  if (state.currentUser && state.currentUser.name) {
    const firstName = state.currentUser.name.split(' ')[0];
    greetingEl.innerHTML = `Hello, <strong>${firstName}</strong>`;
    accountSubEl.innerHTML = `My Account <i class="fa-solid fa-caret-down"></i>`;
    
    // Initials avatar
    const initials = state.currentUser.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    avatarEl.innerHTML = initials;
    avatarEl.style.backgroundColor = '#fb641b';
    avatarEl.style.color = '#ffffff';

    // Dropdown content
    dropdownName.innerHTML = `${state.currentUser.name} <span style="font-size:0.75rem; color:#ff9f00;">⭐ Plus</span>`;
    dropdownEmail.innerText = state.currentUser.email || state.currentUser.phone;
    dropdownSignInBtn.classList.add('hidden');
    logoutLink.classList.remove('hidden');
  } else {
    greetingEl.innerText = 'Hello, Sign In';
    accountSubEl.innerHTML = `Account & Lists <i class="fa-solid fa-caret-down"></i>`;
    avatarEl.innerHTML = `<i class="fa-regular fa-user"></i>`;
    avatarEl.style.backgroundColor = '#febd69';
    avatarEl.style.color = '#111';

    dropdownName.innerText = 'Welcome, Guest!';
    dropdownEmail.innerText = 'Sign in to track orders & wishlist';
    dropdownSignInBtn.classList.remove('hidden');
    logoutLink.classList.add('hidden');
  }

  if (pincodeEl) {
    pincodeEl.innerText = state.pincode;
  }
}

function handleAccountClick() {
  if (!state.currentUser) {
    openAuthModal('login');
  } else {
    const container = document.getElementById('accountNavContainer');
    container.classList.toggle('open');
  }
}

// ========================================================
// ADVANCED FILTER & SORT SYSTEM
// ========================================================
function applyFiltersAndSort() {
  let list = state.products.filter(item => {
    // 1. Category Filter
    const matchCat = (state.activeCategory === 'All') || (item.category === state.activeCategory);
    
    // 2. Search Query (name, brand, category, subcategory)
    const q = state.searchQuery.toLowerCase().trim();
    const matchSearch = !q || (
      item.name.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.subcategory && item.subcategory.toLowerCase().includes(q))
    );

    // 3. Price Range Slider
    const matchPrice = item.price <= state.maxPrice;

    // 4. Rating Filter
    const matchRating = item.rating >= state.minRating;

    // 5. Discount Filter
    const discountPct = Math.round(((item.mrp - item.price) / item.mrp) * 100);
    const matchDiscount = discountPct >= state.minDiscount;

    // 6. In Stock Filter
    const matchStock = !state.inStockOnly || item.inStock;

    return matchCat && matchSearch && matchPrice && matchRating && matchDiscount && matchStock;
  });

  // Sort Logic
  switch (state.sortBy) {
    case 'price-low-high':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount':
      list.sort((a, b) => {
        const discA = ((a.mrp - a.price) / a.mrp);
        const discB = ((b.mrp - b.price) / b.mrp);
        return discB - discA;
      });
      break;
    case 'newest':
      list.sort((a, b) => b.id - a.id);
      break;
    case 'featured':
    default:
      list.sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount));
      break;
  }

  state.filteredProducts = list;
  state.visibleLimit = 24; // Reset pagination for new search/filter
  renderProducts();
  renderResultsSummary();
}

// Render Products Grid with Pagination Support
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  const loadMoreRemain = document.getElementById('loadMoreRemain');

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    loadMoreContainer.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  // Slice based on pagination limit
  const visibleItems = state.filteredProducts.slice(0, state.visibleLimit);

  grid.innerHTML = visibleItems.map(p => {
    const discountPct = Math.round(((p.mrp - p.price) / p.mrp) * 100);
    const isWishlisted = state.wishlist.includes(p.id);
    const inCart = state.cart.some(c => c.id === p.id);

    return `
      <div class="product-card" onclick="openPdpModal(${p.id})">
        <span class="product-discount-tag">${discountPct}% OFF</span>
        
        <button 
          class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
          title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          onclick="toggleWishlist(event, ${p.id})"
        >
          <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
        </button>

        <div class="card-img-wrapper">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80';">
        </div>

        <div class="card-brand">${p.brand} • <span style="font-weight:400; color:#888;">${p.subcategory || p.category}</span></div>
        <h3 class="product-title" title="${p.name}">${p.name}</h3>

        <div class="card-rating-row">
          <span class="rating-pill-green">
            ${p.rating} <i class="fa-solid fa-star" style="font-size:0.65rem"></i>
          </span>
          <span class="rating-count-text">(${p.reviewCount.toLocaleString()})</span>
        </div>

        <div class="card-price-row">
          <span class="card-selling-price">$${p.price.toFixed(2)}</span>
          <span class="card-mrp-price">$${p.mrp.toFixed(2)}</span>
          <span class="card-discount-text">${discountPct}% off</span>
        </div>

        <div class="card-stock-indicator ${p.inStock ? (p.stockCount <= 5 ? 'low-stock' : 'in-stock') : 'low-stock'}">
          ${p.inStock ? (p.stockCount <= 5 ? `Only ${p.stockCount} left in stock!` : 'In Stock') : 'Currently Out of Stock'}
        </div>

        <div class="card-actions" onclick="event.stopPropagation()">
          <button 
            class="btn-card-cart ${inCart ? 'in-cart' : ''}" 
            onclick="handleCardCartClick(${p.id})"
          >
            <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-shopping'}"></i>
            ${inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Handle Load More Button
  const remaining = state.filteredProducts.length - state.visibleLimit;
  if (remaining > 0) {
    loadMoreContainer.classList.remove('hidden');
    loadMoreRemain.innerText = remaining;
  } else {
    loadMoreContainer.classList.add('hidden');
  }
}

function loadMoreProducts() {
  state.visibleLimit += 24;
  renderProducts();
  renderResultsSummary();
}

function renderResultsSummary() {
  const countEl = document.getElementById('resultsCount');
  const tagsEl = document.getElementById('activeFilterTags');

  const shownCount = Math.min(state.visibleLimit, state.filteredProducts.length);
  countEl.innerText = `Showing ${shownCount} of ${state.filteredProducts.length} products`;

  let tags = [];
  if (state.activeCategory !== 'All') {
    tags.push(`Category: ${state.activeCategory}`);
  }
  if (state.searchQuery) {
    tags.push(`"${state.searchQuery}"`);
  }
  if (state.maxPrice < 3500) {
    tags.push(`Under $${state.maxPrice}`);
  }
  if (state.minRating > 0) {
    tags.push(`${state.minRating}★ & above`);
  }
  if (state.minDiscount > 0) {
    tags.push(`${state.minDiscount}%+ off`);
  }
  if (state.inStockOnly) {
    tags.push('In Stock Only');
  }

  tagsEl.innerHTML = tags.map(tag => `
    <span class="filter-tag">${tag}</span>
  `).join('');
}

// ========================================================
// FILTER HANDLERS
// ========================================================
function filterCategory(category) {
  state.activeCategory = category;

  const headerSelect = document.getElementById('headerCategorySelect');
  if (headerSelect) {
    headerSelect.value = category;
  }

  document.querySelectorAll('input[name="catFilter"]').forEach(radio => {
    radio.checked = (radio.value === category);
  });

  document.querySelectorAll('.subnav-link').forEach(link => {
    link.classList.toggle('active', link.innerText.includes(category) || (category === 'All' && link.innerText.includes('All Products')));
  });

  applyFiltersAndSort();
}

function onHeaderCategoryChange(category) {
  filterCategory(category);
}

function handlePriceRange(value) {
  state.maxPrice = Number(value);
  document.getElementById('priceRangeValue').innerText = `$${value}`;
  applyFiltersAndSort();
}

function handleRatingFilter(rating) {
  state.minRating = Number(rating);
  applyFiltersAndSort();
}

function handleDiscountFilter(discount) {
  state.minDiscount = Number(discount);
  applyFiltersAndSort();
}

function handleInStockOnly(checked) {
  state.inStockOnly = checked;
  applyFiltersAndSort();
}

function handleSortChange(sortValue) {
  state.sortBy = sortValue;
  applyFiltersAndSort();
}

function filterDeals() {
  state.minDiscount = 20;
  document.querySelectorAll('input[name="discountFilter"]').forEach(r => {
    r.checked = (r.value === "20");
  });
  showToast('Filtered 20%+ discount hot deals!', 'info');
  applyFiltersAndSort();
}

function resetFilters() {
  state.activeCategory = 'All';
  state.maxPrice = 3500;
  state.minRating = 0;
  state.minDiscount = 0;
  state.inStockOnly = false;
  state.searchQuery = '';
  state.sortBy = 'featured';

  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('priceRangeInput').value = 3500;
  document.getElementById('priceRangeValue').innerText = '$3500';
  document.getElementById('sortSelect').value = 'featured';
  document.getElementById('inStockOnly').checked = false;

  document.querySelectorAll('input[name="catFilter"]').forEach(r => r.checked = (r.value === 'All'));
  document.querySelectorAll('input[name="ratingFilter"]').forEach(r => r.checked = (r.value === '0'));
  document.querySelectorAll('input[name="discountFilter"]').forEach(r => r.checked = (r.value === '0'));

  const headerSelect = document.getElementById('headerCategorySelect');
  if (headerSelect) headerSelect.value = 'All';

  document.querySelectorAll('.subnav-link').forEach(link => {
    link.classList.toggle('active', link.innerText.includes('All Products'));
  });

  hideAutocomplete();
  applyFiltersAndSort();
  showToast('All filters have been reset', 'info');
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebarFilters');
  sidebar.classList.toggle('mobile-open');
}

// ========================================================
// SMART SEARCH WITH DEBOUNCE & AUTOCOMPLETE
// ========================================================
function handleSearchInput(e) {
  const query = e.target.value;
  const clearBtn = document.getElementById('clearSearchBtn');
  
  if (query.trim().length > 0) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }

  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    state.searchQuery = query;
    showAutocomplete(query);
    applyFiltersAndSort();
  }, 250);
}

function handleSearchKey(e) {
  if (e.key === 'Enter') {
    hideAutocomplete();
    triggerSearch();
  }
}

function triggerSearch() {
  const query = document.getElementById('searchInput').value;
  state.searchQuery = query;
  hideAutocomplete();
  applyFiltersAndSort();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  state.searchQuery = '';
  hideAutocomplete();
  applyFiltersAndSort();
}

function showAutocomplete(query) {
  const dropdown = document.getElementById('autocompleteDropdown');
  const q = query.trim().toLowerCase();

  if (!q) {
    hideAutocomplete();
    return;
  }

  const matches = state.products.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.subcategory && p.subcategory.toLowerCase().includes(q))
  ).slice(0, 6);

  if (matches.length === 0) {
    dropdown.innerHTML = `<div style="padding:12px; font-size:0.85rem; color:#888;">No suggestion found for "${query}"</div>`;
    dropdown.classList.remove('hidden');
    return;
  }

  dropdown.innerHTML = matches.map(m => `
    <div class="autocomplete-item" onclick="selectAutocompleteItem(${m.id})">
      <img src="${m.images[0]}" alt="${m.name}">
      <div class="item-info">
        <span class="item-title">${highlightMatch(m.name, q)}</span>
        <span class="item-category">in ${m.category} (${m.subcategory || ''}) • by ${m.brand}</span>
      </div>
      <span class="item-price">$${m.price.toFixed(2)}</span>
    </div>
  `).join('');

  dropdown.classList.remove('hidden');
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong style="color:#2874f0;">$1</strong>');
}

function hideAutocomplete() {
  const dropdown = document.getElementById('autocompleteDropdown');
  if (dropdown) dropdown.classList.add('hidden');
}

function selectAutocompleteItem(productId) {
  hideAutocomplete();
  openPdpModal(productId);
}

// ========================================================
// PRODUCT DETAIL MODAL (PDP)
// ========================================================
function openPdpModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.currentPdpProduct = product;
  const discountPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const pdpImg = document.getElementById('pdpMainImg');
  pdpImg.src = product.images[0];
  pdpImg.onerror = function() {
    this.onerror = null;
    this.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80';
  };
  document.getElementById('pdpDiscountBadge').innerText = `${discountPct}% OFF`;
  document.getElementById('pdpBrand').innerText = `${product.brand} • ${product.subcategory || product.category}`;
  document.getElementById('pdpTitle').innerText = product.name;
  document.getElementById('pdpRatingVal').innerText = product.rating;
  document.getElementById('pdpRatingCount').innerText = `(${product.reviewCount.toLocaleString()} ratings & reviews)`;
  document.getElementById('pdpPrice').innerText = `$${product.price.toFixed(2)}`;
  document.getElementById('pdpMrp').innerText = `$${product.mrp.toFixed(2)}`;
  document.getElementById('pdpSavingText').innerText = `${discountPct}% off - Save $${(product.mrp - product.price).toFixed(2)}`;
  
  const stockEl = document.getElementById('pdpStockStatus');
  if (product.inStock) {
    stockEl.innerHTML = product.stockCount <= 5 
      ? `<span style="color:#f97316"><i class="fa-solid fa-triangle-exclamation"></i> Only ${product.stockCount} units remaining in stock!</span>`
      : `<span style="color:#388e3c"><i class="fa-solid fa-circle-check"></i> In Stock (Dispatched within 24 hours)</span>`;
  } else {
    stockEl.innerHTML = `<span style="color:#ef4444"><i class="fa-solid fa-circle-xmark"></i> Currently Out of Stock</span>`;
  }

  const thumbsWrap = document.getElementById('pdpThumbnails');
  thumbsWrap.innerHTML = product.images.map((img, idx) => `
    <img 
      src="${img}" 
      class="pdp-thumb-img ${idx === 0 ? 'active' : ''}" 
      onclick="changePdpImage('${img}', this)"
      alt="Thumbnail ${idx + 1}"
    >
  `).join('');

  const highlightsWrap = document.getElementById('pdpHighlights');
  highlightsWrap.innerHTML = product.highlights.map(h => `<li>${h}</li>`).join('');

  const isWishlisted = state.wishlist.includes(product.id);
  const wishBtn = document.getElementById('pdpWishlistBtn');
  wishBtn.classList.toggle('active', isWishlisted);
  wishBtn.innerHTML = `<i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>`;

  document.getElementById('pdpPincodeInput').value = state.pincode.split(' ')[0] || '';
  document.getElementById('pdpPincodeResult').innerHTML = '';

  renderPdpReviews(product);

  document.getElementById('pdpModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePdpModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('pdpModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
  state.currentPdpProduct = null;
}

function changePdpImage(src, thumbEl) {
  document.getElementById('pdpMainImg').src = src;
  document.querySelectorAll('.pdp-thumb-img').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function zoomImage(e) {
  const wrap = document.getElementById('pdpMainImageWrap');
  const img = document.getElementById('pdpMainImg');
  const { left, top, width, height } = wrap.getBoundingClientRect();
  const x = ((e.clientX - left) / width) * 100;
  const y = ((e.clientY - top) / height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = 'scale(1.8)';
}

function resetZoom() {
  const img = document.getElementById('pdpMainImg');
  img.style.transform = 'scale(1)';
}

function checkPdpDelivery() {
  const pin = document.getElementById('pdpPincodeInput').value.trim();
  const resEl = document.getElementById('pdpPincodeResult');

  if (!pin || pin.length < 5) {
    resEl.className = 'pincode-result error';
    resEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid 5 or 6-digit Pincode';
    return;
  }

  resEl.className = 'pincode-result success';
  resEl.innerHTML = `
    <i class="fa-solid fa-circle-check"></i> Express Delivery available to <strong>${pin}</strong><br>
    ⚡ <strong>Fastest Delivery:</strong> Tomorrow by 1:00 PM | <span style="color:#059669">FREE Delivery</span>
  `;
}

function renderPdpReviews(product) {
  const list = document.getElementById('pdpReviewsList');
  if (!product.reviews || product.reviews.length === 0) {
    list.innerHTML = '<p style="color:#888; font-size:0.82rem;">No reviews yet. Be the first to review this product!</p>';
    return;
  }

  list.innerHTML = product.reviews.map(r => `
    <div class="review-item">
      <div class="review-user-row">
        <span class="rating-pill-green" style="font-size:0.7rem; padding:1px 5px;">
          ${r.rating} <i class="fa-solid fa-star"></i>
        </span>
        <span class="review-user-name">${r.name}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <p class="review-text">${r.comment}</p>
    </div>
  `).join('');
}

function toggleReviewForm() {
  const form = document.getElementById('reviewForm');
  form.classList.toggle('hidden');
}

function setStarRating(num) {
  state.selectedStarRating = num;
  document.querySelectorAll('#starRatingSelect span').forEach(s => {
    const starVal = Number(s.getAttribute('data-star'));
    s.classList.toggle('selected', starVal <= num);
  });
}

function submitReview() {
  if (!state.currentPdpProduct) return;
  const authorName = (state.currentUser && state.currentUser.name) 
    ? state.currentUser.name 
    : (document.getElementById('reviewAuthor').value.trim() || 'Verified Customer');
  const comment = document.getElementById('reviewComment').value.trim();

  if (!comment) {
    showToast('Please enter your review experience', 'warning');
    return;
  }

  const newReview = {
    name: authorName,
    rating: state.selectedStarRating,
    comment,
    date: 'Just now'
  };

  state.currentPdpProduct.reviews.unshift(newReview);
  state.currentPdpProduct.reviewCount += 1;
  renderPdpReviews(state.currentPdpProduct);

  document.getElementById('reviewComment').value = '';
  document.getElementById('reviewAuthor').value = '';
  toggleReviewForm();
  showToast('Thank you! Your verified review has been published.', 'success');
}

function pdpAddToCart() {
  if (!state.currentPdpProduct) return;
  addToCart(state.currentPdpProduct.id);
}

function pdpBuyNow() {
  if (!state.currentPdpProduct) return;
  addToCart(state.currentPdpProduct.id);
  closePdpModal();
  startCheckout();
}

function togglePdpWishlist() {
  if (!state.currentPdpProduct) return;
  toggleWishlist(null, state.currentPdpProduct.id);
  const isWishlisted = state.wishlist.includes(state.currentPdpProduct.id);
  const wishBtn = document.getElementById('pdpWishlistBtn');
  wishBtn.classList.toggle('active', isWishlisted);
  wishBtn.innerHTML = `<i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>`;
}

// ========================================================
// CART ENGINE (Drawer, Quantity, Prices, Coupons)
// ========================================================
function handleCardCartClick(productId) {
  addToCart(productId);
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(c => c.id === productId);
  if (existing) {
    existing.quantity += 1;
    showToast(`Increased quantity of "${product.name.slice(0, 22)}..."`, 'info');
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      mrp: product.mrp,
      image: product.images[0],
      quantity: 1
    });
    showToast(`Added "${product.name.slice(0, 22)}..." to cart!`, 'success');
  }

  saveCart();
  updateCartUI();
  renderProducts();
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(c => c.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(c => c.id !== productId);
  saveCart();
  updateCartUI();
  renderProducts();
  showToast('Item removed from cart', 'info');
}

function saveCart() {
  localStorage.setItem('shoppulse_cart', JSON.stringify(state.cart));
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = drawer.classList.contains('open');

  if (isOpen) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    updateCartUI();
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCountEl = document.getElementById('cartCount');
  const drawerCartCountEl = document.getElementById('drawerCartCount');
  const headerCartTotalEl = document.getElementById('headerCartTotal');
  const cartFooter = document.getElementById('cartFooter');
  const freeDeliveryBanner = document.getElementById('freeDeliveryBanner');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.innerText = totalCount;
  drawerCartCountEl.innerText = totalCount;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your cart is empty!</p>
        <button class="primary-btn sm" onclick="toggleCart()">Browse 300+ Products</button>
      </div>
    `;
    cartFooter.style.display = 'none';
    freeDeliveryBanner.style.display = 'none';
    headerCartTotalEl.innerText = '$0.00';
    return;
  }

  cartFooter.style.display = 'block';
  freeDeliveryBanner.style.display = 'block';

  cartItemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title" title="${item.name}">${item.name}</div>
        <div class="cart-item-price-wrap">
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <span class="cart-item-mrp">$${item.mrp.toFixed(2)}</span>
        </div>
        <div class="cart-item-actions">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
            <span class="qty-count">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
          <button class="btn-remove-cart" onclick="removeFromCart(${item.id})">
            <i class="fa-regular fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');

  calculatePriceBreakdown(totalCount);
}

function calculatePriceBreakdown(totalCount) {
  let subtotalMRP = 0;
  let sellingTotal = 0;

  state.cart.forEach(item => {
    subtotalMRP += item.mrp * item.quantity;
    sellingTotal += item.price * item.quantity;
  });

  const mrpDiscount = subtotalMRP - sellingTotal;
  const freeThreshold = 50;
  let deliveryFee = sellingTotal >= freeThreshold ? 0 : 9.99;

  let couponDiscount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.pct) {
      couponDiscount = (sellingTotal * state.appliedCoupon.pct) / 100;
    } else if (state.appliedCoupon.flat) {
      couponDiscount = state.appliedCoupon.flat;
    }
  }

  const finalTotal = Math.max(0, sellingTotal - couponDiscount + deliveryFee);
  const totalSavings = mrpDiscount + couponDiscount + (sellingTotal >= freeThreshold ? 9.99 : 0);

  const freeDeliveryText = document.getElementById('freeDeliveryText');
  const freeDeliveryFill = document.getElementById('freeDeliveryFill');
  if (sellingTotal >= freeThreshold) {
    freeDeliveryText.innerHTML = '🎉 You have unlocked <strong>FREE Express Delivery!</strong>';
    freeDeliveryFill.style.width = '100%';
  } else {
    const diff = (freeThreshold - sellingTotal).toFixed(2);
    const pct = Math.min(100, Math.round((sellingTotal / freeThreshold) * 100));
    freeDeliveryText.innerHTML = `Add <strong>$${diff}</strong> more to unlock <strong>FREE Delivery</strong>`;
    freeDeliveryFill.style.width = `${pct}%`;
  }

  document.getElementById('headerCartTotal').innerText = `$${finalTotal.toFixed(2)}`;
  document.getElementById('breakdownItemCount').innerText = totalCount;
  document.getElementById('breakdownSubtotal').innerText = `$${subtotalMRP.toFixed(2)}`;
  document.getElementById('breakdownDiscount').innerText = `-$${mrpDiscount.toFixed(2)}`;
  
  const couponRow = document.getElementById('couponDiscountRow');
  if (state.appliedCoupon) {
    couponRow.style.display = 'flex';
    document.getElementById('appliedCouponCode').innerText = state.appliedCoupon.code;
    document.getElementById('breakdownCouponDiscount').innerText = `-$${couponDiscount.toFixed(2)}`;
  } else {
    couponRow.style.display = 'none';
  }

  document.getElementById('breakdownDelivery').innerText = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
  document.getElementById('breakdownTotal').innerText = `$${finalTotal.toFixed(2)}`;
  document.getElementById('totalSavingsAmount').innerText = `$${totalSavings.toFixed(2)}`;
}

function fillCoupon(code) {
  document.getElementById('couponInput').value = code;
  applyCoupon();
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const statusEl = document.getElementById('couponStatus');

  if (!code) {
    statusEl.className = 'coupon-status error';
    statusEl.innerText = 'Please enter a coupon code';
    return;
  }

  const coupon = VALID_COUPONS[code];
  if (!coupon) {
    statusEl.className = 'coupon-status error';
    statusEl.innerText = 'Invalid coupon code. Try SAVE20';
    state.appliedCoupon = null;
    calculatePriceBreakdown(state.cart.reduce((s, i) => s + i.quantity, 0));
    return;
  }

  let cartTotal = state.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  if (coupon.minOrder && cartTotal < coupon.minOrder) {
    statusEl.className = 'coupon-status error';
    statusEl.innerText = `Minimum order amount of $${coupon.minOrder} required for ${code}`;
    return;
  }

  state.appliedCoupon = { code, ...coupon };
  statusEl.className = 'coupon-status success';
  statusEl.innerText = `✔ ${code} applied successfully! (${coupon.desc})`;
  showToast(`Coupon ${code} applied!`, 'success');
  calculatePriceBreakdown(state.cart.reduce((s, i) => s + i.quantity, 0));
}

// ========================================================
// WISHLIST FUNCTIONALITY
// ========================================================
function toggleWishlist(e, productId) {
  if (e) e.stopPropagation();

  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Removed from your Wishlist', 'info');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to your Wishlist!', 'success');
  }

  localStorage.setItem('shoppulse_wishlist', JSON.stringify(state.wishlist));
  updateWishlistCount();
  renderProducts();
  renderWishlistModal();
}

function updateWishlistCount() {
  const count = state.wishlist.length;
  document.getElementById('wishlistCount').innerText = count;
  const modalCount = document.getElementById('wishlistModalCount');
  if (modalCount) modalCount.innerText = count;
}

function openWishlistModal() {
  renderWishlistModal();
  document.getElementById('wishlistModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('wishlistModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function renderWishlistModal() {
  const body = document.getElementById('wishlistBody');
  const items = state.products.filter(p => state.wishlist.includes(p.id));

  if (items.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:2rem 1rem; color:#888;">
        <i class="fa-regular fa-heart" style="font-size:2.5rem; margin-bottom:8px;"></i>
        <p>Your wishlist is currently empty.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = items.map(p => `
    <div class="wishlist-item">
      <img src="${p.images[0]}" alt="${p.name}">
      <div class="wishlist-item-info">
        <div class="wishlist-item-title">${p.name}</div>
        <div class="wishlist-item-price">$${p.price.toFixed(2)}</div>
      </div>
      <div class="wishlist-actions">
        <button class="btn-wishlist-cart" onclick="moveWishlistToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Move to Cart
        </button>
        <button class="btn-wishlist-remove" onclick="toggleWishlist(null, ${p.id})" title="Remove">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function moveWishlistToCart(productId) {
  addToCart(productId);
  toggleWishlist(null, productId);
  renderWishlistModal();
}

// ========================================================
// COMPREHENSIVE AUTHENTICATION SYSTEM (Password / OTP / Signup)
// ========================================================
function openAuthModal(tab = 'login') {
  switchAuthTab(tab);
  document.getElementById('authModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('authModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  const loginBtn = document.getElementById('loginTabBtn');
  const otpBtn = document.getElementById('otpTabBtn');
  const signupBtn = document.getElementById('signupTabBtn');

  const loginForm = document.getElementById('loginForm');
  const otpForm = document.getElementById('otpForm');
  const signupForm = document.getElementById('signupForm');

  loginBtn.classList.toggle('active', tab === 'login');
  otpBtn.classList.toggle('active', tab === 'otp');
  signupBtn.classList.toggle('active', tab === 'signup');

  loginForm.classList.toggle('hidden', tab !== 'login');
  otpForm.classList.toggle('hidden', tab !== 'otp');
  signupForm.classList.toggle('hidden', tab !== 'signup');
}

// 1. Password Login
function handlePasswordLogin(e) {
  e.preventDefault();
  const identifier = document.getElementById('loginIdentifier').value.trim();
  const password = document.getElementById('loginPassword').value;

  // Search users in localStorage
  const found = state.users.find(u => 
    (u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier) &&
    u.password === password
  );

  if (found) {
    state.currentUser = found;
    localStorage.setItem('shoppulse_current_user', JSON.stringify(found));
    renderHeaderState();
    closeAuthModal();
    showToast(`Welcome back, ${found.name}!`, 'success');
  } else {
    // If not found, let's verify if user exists with another password
    const userExists = state.users.some(u => u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier);
    if (userExists) {
      showToast('Incorrect password. Please try again or use OTP Login.', 'warning');
    } else {
      // Auto-register convenience for seamless trial
      const newUser = {
        name: identifier.includes('@') ? identifier.split('@')[0] : 'ShopPulse Shopper',
        email: identifier.includes('@') ? identifier : `${identifier}@shoppulse.com`,
        phone: identifier.includes('@') ? '9876543210' : identifier,
        password: password,
        membership: 'Member'
      };
      state.users.push(newUser);
      localStorage.setItem('shoppulse_users', JSON.stringify(state.users));
      state.currentUser = newUser;
      localStorage.setItem('shoppulse_current_user', JSON.stringify(newUser));
      renderHeaderState();
      closeAuthModal();
      showToast(`Account created & logged in as ${newUser.name}!`, 'success');
    }
  }
}

// 2. OTP Login
function requestOtpCode() {
  const identifier = document.getElementById('otpIdentifier').value.trim();
  if (!identifier) {
    showToast('Please enter your mobile number or email', 'warning');
    return;
  }

  // Generate a random 4-digit OTP or standard 1234
  const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
  state.simulatedOtp = randomOtp;
  state.otpTarget = identifier;

  document.getElementById('otpSentTarget').innerText = identifier;
  document.getElementById('simulatedOtpCode').innerText = randomOtp;

  document.getElementById('otpStepRequest').classList.add('hidden');
  document.getElementById('otpStepVerify').classList.remove('hidden');

  showToast(`OTP Code sent to ${identifier}!`, 'success');

  // Auto-focus first digit
  setTimeout(() => {
    document.getElementById('otp1').focus();
  }, 200);
}

function handleOtpDigit(input, index) {
  if (input.value && index < 4) {
    const next = document.getElementById(`otp${index + 1}`);
    if (next) next.focus();
  }
}

function handleOtpSubmit(e) {
  e.preventDefault();
  const code = (
    document.getElementById('otp1').value +
    document.getElementById('otp2').value +
    document.getElementById('otp3').value +
    document.getElementById('otp4').value
  ).trim();

  if (code === state.simulatedOtp || code === '1234') {
    // Check if user already exists
    let user = state.users.find(u => u.phone === state.otpTarget || u.email.toLowerCase() === state.otpTarget.toLowerCase());
    if (!user) {
      user = {
        name: state.otpTarget.includes('@') ? state.otpTarget.split('@')[0] : 'Mobile User',
        email: state.otpTarget.includes('@') ? state.otpTarget : `${state.otpTarget}@mobile.com`,
        phone: state.otpTarget,
        password: 'password123',
        membership: 'Plus Member ⭐'
      };
      state.users.push(user);
      localStorage.setItem('shoppulse_users', JSON.stringify(state.users));
    }

    state.currentUser = user;
    localStorage.setItem('shoppulse_current_user', JSON.stringify(user));
    renderHeaderState();
    closeAuthModal();
    showToast(`Phone verified! Welcome, ${user.name}!`, 'success');

    // Reset OTP fields
    document.getElementById('otpStepRequest').classList.remove('hidden');
    document.getElementById('otpStepVerify').classList.add('hidden');
    ['otp1', 'otp2', 'otp3', 'otp4'].forEach(id => document.getElementById(id).value = '');
  } else {
    showToast('Invalid OTP! Please check the code shown in the green banner.', 'warning');
  }
}

// 3. User Sign Up
function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (password.length < 6) {
    showToast('Password must be at least 6 characters long', 'warning');
    return;
  }

  // Check existing
  if (state.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    showToast('An account with this email already exists. Please login.', 'warning');
    switchAuthTab('login');
    document.getElementById('loginIdentifier').value = email;
    return;
  }

  const newUser = {
    name,
    email,
    phone,
    password,
    membership: 'ShopPulse Member'
  };

  state.users.push(newUser);
  localStorage.setItem('shoppulse_users', JSON.stringify(state.users));
  state.currentUser = newUser;
  localStorage.setItem('shoppulse_current_user', JSON.stringify(newUser));

  renderHeaderState();
  closeAuthModal();
  showToast(`Congratulations ${name}! Your account is ready.`, 'success');
}

// Quick Demo Login
function quickDemoLogin(type) {
  if (type === 'rohit') {
    state.currentUser = state.users.find(u => u.email.includes('rohit')) || DEFAULT_USERS[1];
  } else {
    state.currentUser = state.users.find(u => u.email.includes('vishal')) || DEFAULT_USERS[0];
  }

  localStorage.setItem('shoppulse_current_user', JSON.stringify(state.currentUser));
  renderHeaderState();
  closeAuthModal();
  showToast(`Signed in as demo user: ${state.currentUser.name}`, 'success');
}

// Logout
function handleLogout() {
  state.currentUser = null;
  localStorage.removeItem('shoppulse_current_user');
  renderHeaderState();
  const accountNav = document.getElementById('accountNavContainer');
  if (accountNav) accountNav.classList.remove('open');
  showToast('You have been logged out successfully', 'info');
}

function handleForgotPassword() {
  const id = document.getElementById('loginIdentifier').value.trim();
  if (!id) {
    showToast('Enter your email or phone first to reset password', 'info');
    return;
  }
  showToast(`Password reset link sent to ${id}! Demo password is: password123`, 'success');
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    btn.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
}

function checkPasswordStrength(val) {
  const fill = document.getElementById('pwdStrengthFill');
  const label = document.getElementById('pwdStrengthLabel');

  if (!val) {
    fill.style.width = '0%';
    label.innerText = 'Enter password';
    return;
  }

  let score = 0;
  if (val.length >= 6) score += 33;
  if (/[0-9]/.test(val) && val.length >= 8) score += 33;
  if (/[^A-Za-z0-9]/.test(val)) score += 34;

  fill.style.width = `${score}%`;

  if (score <= 33) {
    fill.style.backgroundColor = '#ef4444';
    label.innerText = 'Weak (add numbers & length)';
  } else if (score <= 66) {
    fill.style.backgroundColor = '#f59e0b';
    label.innerText = 'Good password';
  } else {
    fill.style.backgroundColor = '#10b981';
    label.innerText = 'Strong password!';
  }
}

// ========================================================
// MY ORDERS & TRACKING SYSTEM
// ========================================================
function updateOrdersCount() {
  const count = state.orders.length;
  const badge = document.getElementById('dropdownOrdersCount');
  const modalCount = document.getElementById('myOrdersCount');
  if (badge) badge.innerText = count;
  if (modalCount) modalCount.innerText = count;
}

function openMyOrdersModal() {
  renderOrdersModal();
  document.getElementById('ordersModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrdersModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('ordersModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function renderOrdersModal() {
  const body = document.getElementById('ordersModalBody');
  updateOrdersCount();

  if (state.orders.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:#888;">
        <i class="fa-solid fa-box-open" style="font-size:3rem; margin-bottom:12px; color:#cbd5e1;"></i>
        <p>You haven't placed any orders yet.</p>
        <button class="primary-btn sm" onclick="closeOrdersModal()">Start Shopping</button>
      </div>
    `;
    return;
  }

  body.innerHTML = state.orders.map(order => `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <span class="order-id-badge">${order.id}</span>
          <span style="font-size:0.75rem; color:#888; margin-left:8px;">Placed on ${order.date}</span>
        </div>
        <span class="order-status-badge ${order.status.toLowerCase() === 'delivered' ? 'delivered' : 'shipped'}">
          <i class="fa-solid ${order.status.toLowerCase() === 'delivered' ? 'fa-circle-check' : 'fa-truck-fast'}"></i> ${order.status}
        </span>
      </div>

      <div class="order-items-preview">
        ${order.items.map(it => `
          <div class="order-preview-row">
            <img src="${it.image}" alt="${it.name}">
            <div class="order-preview-info">
              <div class="order-preview-title">${it.name}</div>
              <div class="order-preview-price">Qty: <strong>${it.quantity}</strong> • $${(it.price * it.quantity).toFixed(2)}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="order-tracking-bar">
        <div class="tracking-dot">
          <i class="fa-solid fa-check"></i> Confirmed
        </div>
        <div class="tracking-dot">
          <i class="fa-solid fa-truck"></i> Shipped
        </div>
        <div class="tracking-dot" style="${order.status === 'Delivered' ? 'color:#059669;' : 'color:#94a3b8;'}">
          <i class="fa-solid fa-house"></i> ${order.status === 'Delivered' ? 'Delivered' : 'Arriving Soon'}
        </div>
        <span style="font-weight:700; color:#111;">Total: ${order.total}</span>
      </div>
    </div>
  `).join('');
}

// ========================================================
// PINCODE SELECTION MODAL
// ========================================================
function openPincodeModal() {
  document.getElementById('pincodeModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePincodeModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('pincodeModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function saveCustomPincode() {
  const pin = document.getElementById('customPincodeInput').value.trim();
  if (!pin || pin.length < 5) {
    showToast('Please enter a valid 5 or 6 digit Pincode', 'warning');
    return;
  }
  state.pincode = `${pin} (Custom)`;
  localStorage.setItem('shoppulse_pincode', state.pincode);
  renderHeaderState();
  closePincodeModal();
  showToast(`Delivery location updated to ${pin}`, 'success');
}

function selectQuickPincode(pin, city) {
  state.pincode = `${pin} (${city})`;
  localStorage.setItem('shoppulse_pincode', state.pincode);
  renderHeaderState();
  closePincodeModal();
  showToast(`Delivery location updated to ${city} (${pin})`, 'success');
}

// ========================================================
// MULTI-STEP CHECKOUT FLOW
// ========================================================
function startCheckout() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Add items before checkout.', 'warning');
    return;
  }

  // Pre-fill address if user exists
  if (state.currentUser && state.currentUser.name) {
    document.getElementById('shipName').value = state.currentUser.name;
    if (state.currentUser.phone) {
      document.getElementById('shipPhone').value = state.currentUser.phone;
    }
  }

  const cleanPin = state.pincode.split(' ')[0];
  if (cleanPin && !isNaN(cleanPin)) {
    document.getElementById('shipPincode').value = cleanPin;
  }

  goToCheckoutStep(1);
  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer.classList.contains('open')) {
    toggleCart();
  }

  document.getElementById('checkoutModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('checkoutModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function goToCheckoutStep(step) {
  state.checkoutStep = step;

  const s1 = document.getElementById('checkoutStep1');
  const s2 = document.getElementById('checkoutStep2');
  const s3 = document.getElementById('checkoutStep3');

  s1.classList.toggle('hidden', step !== 1);
  s2.classList.toggle('hidden', step !== 2);
  s3.classList.toggle('hidden', step !== 3);

  const ind1 = document.getElementById('stepIndicator1');
  const ind2 = document.getElementById('stepIndicator2');
  const ind3 = document.getElementById('stepIndicator3');

  ind1.className = step === 1 ? 'step-item active' : 'step-item completed';
  ind2.className = step === 2 ? 'step-item active' : (step > 2 ? 'step-item completed' : 'step-item');
  ind3.className = step === 3 ? 'step-item active completed' : 'step-item';

  if (step === 2) {
    const totalText = document.getElementById('breakdownTotal').innerText;
    document.getElementById('step2PayableAmount').innerText = totalText;
  }
}

function submitStep1Address(e) {
  e.preventDefault();
  goToCheckoutStep(2);
}

function selectPaymentMethod(method) {
  document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
  const target = document.querySelector(`input[name="paymentMethod"][value="${method}"]`);
  if (target) {
    target.closest('.payment-option').classList.add('selected');
    target.checked = true;
  }

  const upiField = document.getElementById('upiSubfield');
  const cardField = document.getElementById('cardSubfield');

  if (method === 'upi') {
    upiField.classList.remove('hidden');
    cardField.classList.add('hidden');
  } else if (method === 'card') {
    upiField.classList.add('hidden');
    cardField.classList.remove('hidden');
  } else {
    upiField.classList.add('hidden');
    cardField.classList.add('hidden');
  }
}

function processPayment() {
  const payBtn = document.getElementById('payNowBtn');
  payBtn.disabled = true;
  payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';

  setTimeout(() => {
    payBtn.disabled = false;
    payBtn.innerHTML = 'Pay & Place Order';

    const randomOrderId = '#OD' + Math.floor(1000000000 + Math.random() * 9000000000);
    document.getElementById('confirmedOrderId').innerText = randomOrderId;

    const delDate = new Date();
    delDate.setDate(delDate.getDate() + 2);
    const dateStr = delDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    document.getElementById('confirmedDeliveryDate').innerText = `${dateStr} by 8:00 PM`;

    const totalPaidStr = document.getElementById('breakdownTotal').innerText;

    // Save into Orders History
    const newOrder = {
      id: randomOrderId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'In Transit',
      deliveryDate: dateStr,
      items: [...state.cart],
      total: totalPaidStr,
      address: `${document.getElementById('shipStreet').value}, ${document.getElementById('shipCity').value} - ${document.getElementById('shipPincode').value}`
    };

    state.orders.unshift(newOrder);
    localStorage.setItem('shoppulse_orders', JSON.stringify(state.orders));
    updateOrdersCount();

    // Summary Box
    const summaryBox = document.getElementById('confirmedOrderSummary');
    summaryBox.innerHTML = state.cart.map(item => `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:6px;">
        <span>${item.name.slice(0, 32)}... × <strong>${item.quantity}</strong></span>
        <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
      </div>
    `).join('') + `
      <div style="border-top:1px dashed #cbd5e1; margin-top:8px; padding-top:6px; display:flex; justify-content:space-between; font-weight:700;">
        <span>Total Paid</span>
        <span style="color:#2874f0;">${totalPaidStr}</span>
      </div>
    `;

    // Empty Cart
    state.cart = [];
    state.appliedCoupon = null;
    saveCart();
    updateCartUI();
    renderProducts();

    goToCheckoutStep(3);
    showToast('Order confirmed! Added to My Orders.', 'success');
  }, 1200);
}

function finishOrderAndContinue() {
  closeCheckoutModal();
  showToast('Thank you for shopping with ShopPulse!', 'success');
}

// ========================================================
// TOAST NOTIFICATION UTILITY
// ========================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}
