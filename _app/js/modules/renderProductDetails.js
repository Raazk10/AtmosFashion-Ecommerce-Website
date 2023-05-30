import FetchProductDetails from "./fetchProductDetails.js";
import formatPrice from "../util/format-price.js";
import slideShowProductImage from "./slideShowProductDetails.js";

/**
 * Renders the product details on the page.
 * Fetches the product details from the server and populates the HTML elements.
 */
export default function RenderProductDetails() {
  /**
   * Fetches the product details from the server and renders the HTML elements.
   * @returns {Promise<void>} A promise that resolves when the product details are fetched and rendered.
   */
  async function fetchProduct() {
    const productDetails = await FetchProductDetails();
    renderHTML(productDetails);
  }

  /**
   * Renders the HTML elements with the product details.
   * @param {Object} productDetails - The product details.
   */
  function renderHTML(productDetails) {
    const prodtuctDetailsContent = document.querySelector(
      ".product-details__product-content"
    );
    const slideShowSlides = document.querySelector(".slideShowProduct__slides");
    const productNameElement = document.querySelector(".product-name");
    const productSubtitleElement = document.querySelector(".product-subTitle");
    const productDescriptionElement = document.querySelector(
      ".product-description"
    );
    const productPriceElement = document.querySelector(".product-price");
    const productBrandElement = document.querySelector(".product-brand");
    const productCategoriesElement = document.querySelector(
      ".product-categories"
    );
    const productSizesElement = document.querySelector(
      ".product-details__sizes"
    );
    const productColorElement = document.querySelector(
      ".product-details__colors"
    );
    const productStockElement = document.querySelector(
      ".product-details__stock"
    );

    for (const [index, imageUrl] of productDetails.images.entries()) {
      // create a new fig element
      const figureElement = document.createElement("figure");
      figureElement.classList.add(
        "slideShowProduct__slide",
        "slideShowProduct__slide--active"
      );
      // Create a new <img> element
      const imgElement = document.createElement("img");
      imgElement.classList.add("slideShowProduct__image");

      // Set the source URL of the image
      imgElement.src = imageUrl;

      // Set the alt text of the image
      imgElement.alt = `Image ${index + 1}`;

      // Set the tab index of the image for accessibility
      imgElement.tabIndex = 0;

      // Append the image element to the productImageElement
      figureElement.appendChild(imgElement);
      slideShowSlides.appendChild(figureElement);
    }
    slideShowProductImage();
    prodtuctDetailsContent.setAttribute("data-id", productDetails._id);
    prodtuctDetailsContent.setAttribute("data-name", productDetails.name);
    prodtuctDetailsContent.setAttribute("data-price", productDetails.price);

    productNameElement.textContent = productDetails.name;
    productSubtitleElement.textContent = productDetails.subtitle;
    productDescriptionElement.textContent = productDetails.description;
    productPriceElement.textContent = `Price: ${formatPrice(
      productDetails.price
    )}`;

    productBrandElement.textContent = `Brand: ${productDetails.brand}`;
    productCategoriesElement.textContent = `Category: ${productDetails.categories.join(
      ", "
    )}`;
    productColorElement.textContent = `Color Available: ${productDetails.color}`;
    productSizesElement.textContent = `Size Available: ${productDetails.sizes}`;
    productStockElement.textContent = `Stock: ${productDetails.stock}`;
  }

  fetchProduct();
}
