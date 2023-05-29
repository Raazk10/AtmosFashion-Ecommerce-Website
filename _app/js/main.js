import FrontpageProduct from "./modules/renderFrontpageProduct.js";
import FilterProduct from "./modules/filterProductCategory.js";
import RenderProductDetails from "./modules/renderProductDetails.js";

// check if the element exists
if (document.querySelector(".frontpage-products")) {
  await FrontpageProduct();
  FilterProduct();
} else if (document.querySelector(".product-details")) {
  RenderProductDetails();
}
