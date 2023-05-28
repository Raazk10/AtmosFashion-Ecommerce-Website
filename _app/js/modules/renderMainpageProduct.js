import FetchMainpageProduct from "./fetchMainpageProduct.js";

export default async function MainPageProduct() {
  const products = await FetchMainpageProduct();
  console.log(products);
}
