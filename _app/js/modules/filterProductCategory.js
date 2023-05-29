import FrontpageProduct from "./renderFrontpageProduct.js";

/**
 * Initializes the filter functionality for the product items.
 */

export default function FilterProduct() {
  // Get all filter buttons
  const filterButtons = document.querySelectorAll(".filterSection__button");

  // Add click event listener to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      // Get the filter value from the data-filter attribute
      const filter = button.getAttribute("data-filter");

      // Call the FrontpageProduct function with the selected filter
      await FrontpageProduct(filter);
    });
  });
}
