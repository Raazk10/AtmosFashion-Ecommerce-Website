/**
   * This shoppping cart functionality is inspired from Alejandro demo project
      to suit as per need to my project and made necessary changes to get desired result
      for this project
   * 
   */

import formatPrice from "../util/format-price.js";

/**
 * Represents a shopping cart.
 */
export default function ShoppingCart() {
  let cart = [];

  // Query selectors

  /**
   * Reference to the element that displays the total price.
   * @type {Element}
   */
  const cartTotalPrice = document.querySelector(".cart-overlay__total");

  /**
   * References to all "Add to Cart" buttons.
   * @type {NodeList}
   */
  const addTocartButtons = document.querySelectorAll(".add-to-cart");

  const cartOverlay = document.querySelector(".cart-overlay");
  const cartOverlayCloseButton = document.querySelector(
    ".cart-overlay__close-button"
  );
  const cartButton = document.querySelector(".main-header__button--cart");
  const cartOverlayItems = document.querySelector(".cart-overlay__items");
  const checkoutButton = document.querySelector(
    ".cart-overlay__checkout-button"
  );
  const emptyButton = document.querySelector(".cart-overlay__empty-button");
  const productQuantitySpan = document.querySelector(".product-quantity");

  // Event listeners

  /**
   * Opens the cart overlay when the cart button is clicked.
   */
  cartButton.addEventListener("click", handleOverlayOpen);

  /**
   * Closes the cart overlay when the close button is clicked.
   */
  cartOverlayCloseButton.addEventListener("click", handleOverlayClose);

  addTocartButtons.forEach((button) => {
    /**
     * Adds the product to the cart when an "Add to Cart" button is clicked.
     */
    button.addEventListener("click", handleAddToCartButtonClick);
  });

  /**
   * Performs the checkout process when the checkout button is clicked.
   *
   * This button doesnt work for now as it realtes to backend
   */
  checkoutButton.addEventListener("click", handleCheckoutButtonClick);

  /**
   * Empties the cart when the empty button is clicked.
   */
  emptyButton.addEventListener("click", handleEmptyButtonClick);

  // Event handlers

  // Show the cart overlay
  function handleOverlayOpen() {
    cartOverlay.style.display = "block";
  }

  // Hide the cart overlay
  function handleOverlayClose() {
    cartOverlay.style.display = "none";
  }

  /**
   * Handles the click event of an "Add to Cart" button.
   * @param {Event} event - The click event.
   */
  function handleAddToCartButtonClick(event) {
    const button = event.currentTarget;
    addCart(button);
    renderCartItems();
  }

  // Perform the checkout process
  function handleCheckoutButtonClick() {
    checkout();
  }

  /**
   * Handles the click event of the empty button.
   */
  function handleEmptyButtonClick() {
    emptyCart();
    renderCartItems();
  }

  // Cart functions

  /**
   * Adds the selected product to the cart.
   * @param {Element} button - The button element representing the selected product.
   */
  function addCart(button) {
    // Find the closest product container element
    const productContainer = button.closest(
      ".product-details__product-content"
    );
    // Get the product from the data attribute
    const productId = productContainer.dataset.id;
    const productName = productContainer.dataset.name;
    const productPrice = parseFloat(productContainer.dataset.price);

    const product = {
      name: productName,
      price: productPrice,
      quantity: 1, // Initialize the product quantity to 1
    };

    // Check if the product already exists in the cart
    const matchInCart = cart.find((product) => product.id === productId);
    if (matchInCart) {
      matchInCart.quantity += 1; // If the product exists, increase its quantity by 1
    } else {
      cart.push(product); // If the product does not exist, add it to the cart
    }
    updateProductQuantity(); // Update the total product quantity
  }

  /**
   * Updates the total product quantity.
   *
   * Calculate the total quantity of products in the cart
   */
  function updateProductQuantity() {
    const totalQuantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    // Update the display of the total product quantity
    productQuantitySpan.textContent = totalQuantity.toString();
  }

  function checkout() {
    // Send cart products to the server for checkout
  }

  /**
   * Empty the cart by resetting the cart array
   *
   * Clear the display of the total product quantity
   */
  function emptyCart() {
    cart = [];
    productQuantitySpan.textContent = "";
    cartTotalPrice.textContent = "";
  }

  // Rendering functions

  /**
   * Creates a cart item element for a given cart product.
   * @param {Object} cartProduct - The cart product.
   * @returns {Element} The created cart item element.
   */
  function createCartItemDOM(cartProduct) {
    const cartItem = document.createElement("div"); // Create a new div element for the cart item
    cartItem.classList.add("cart-overlay__product"); // Add the necessary class to the cart item

    const quantity = document.createElement("div");
    quantity.classList.add("cart-overlay__product--quantity");
    quantity.textContent = cartProduct.quantity;

    const name = document.createElement("div");
    name.classList.add("cart-overlay__product--name");
    name.textContent = cartProduct.name;

    const price = document.createElement("div");
    price.classList.add("cart-overlay__product--price");
    price.textContent = formatPrice(cartProduct.price);

    // Append the element to the cart item
    cartItem.appendChild(quantity);
    cartItem.appendChild(name);
    cartItem.appendChild(price);

    return cartItem;
  }

  /**
   * Renders the cart items in the cart overlay.
   */
  function renderCartItems() {
    // Clear the cart items container
    cartOverlayItems.innerHTML = "";

    // Initialize the total price to 0
    let totalPrice = 0;

    if (cart.length === 0) {
      const noItemsText = document.createElement("div"); // Create a new div element for the "No items in cart" message
      noItemsText.classList.add("cart-overlay__no-items");
      noItemsText.textContent = "No items in cart";
      cartOverlayItems.appendChild(noItemsText);
    } else {
      cart.forEach((product) => {
        // Create a cart item element for each product in the cart
        const cartItem = createCartItemDOM(product);
        cartOverlayItems.appendChild(cartItem);

        // Calculate the total price by multiplying the product price with its quantity
        totalPrice += product.price * product.quantity;
      });

      // Update the display of the total price with the formatted total price
      cartTotalPrice.textContent = `Total price: ${formatPrice(totalPrice)}`;
    }
  }

  //Render the cart items initially
  renderCartItems();
}
