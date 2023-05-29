import FetchFrontpageProduct from "./fetchFrontpageProduct.js";
import formatPrice from "../util/format-price.js";

/**
 * Renders frontpage products on the page.
 * Fetches products from the server and creates DOM elements to display them.
 *
 * @param {string|null} filter - The filter to apply to the products.
 */

export default async function FrontpageProduct(filter = null) {
  const productsContainer = document.querySelector(".frontpage-products");
  // Clear the current products before inserting new ones
  productsContainer.innerHTML = "";

  const products = await FetchFrontpageProduct(filter);

  /**
   * Creates a DOM element for a product item.
   *
   * @param {object} product_item - The product item data.
   * @returns {HTMLElement} The DOM element representing the product item.
   */
  function createProductItemDOM(product_item) {
    const product = document.createElement("a");
    product.classList.add("frontpage-products__product", "grid__column--3");

    product.setAttribute("href", `/product-details/?${product_item.slug}`);

    const productFigure = document.createElement("figure");
    productFigure.classList.add("frontpage-products__product-image");

    const productImg = document.createElement("img");
    productImg.classList.add("frontpage-products__product-img");
    productImg.src = product_item.previewImage;
    productImg.alt = product_item.name;

    const productInformation = document.createElement("figcaption");
    productInformation.classList.add("frontpage-products__product-information");

    const productName = document.createElement("div");
    productName.classList.add("frontpage-products__product-name");
    productName.textContent = product_item.name;

    const productPrice = document.createElement("div");
    productPrice.classList.add("frontpage-products__product-price");
    productPrice.textContent = formatPrice(product_item.price);

    const productShopButton = document.createElement("button");
    productShopButton.classList.add("frontpage-products__product-shop-button");
    productShopButton.textContent = "More Details";

    productFigure.appendChild(productImg);
    productFigure.appendChild(productInformation);
    productInformation.appendChild(productName);
    productInformation.appendChild(productPrice);
    product.appendChild(productFigure);
    product.appendChild(productShopButton);

    return product;
  }

  /**
   * Inserts product items into the products container.
   */
  function insertProductItems() {
    for (const product of products) {
      const productItem = createProductItemDOM(product);
      productsContainer.appendChild(productItem);
    }
  }

  /**
   * Renders the frontpage products on the page.
   */
  function renderProduct() {
    insertProductItems();
  }

  renderProduct();
}
