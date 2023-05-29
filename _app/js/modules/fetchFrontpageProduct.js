import { sanity } from "../sanity.js";

/**
 * Fetches frontpage products from Sanity CMS.
 *
 * @param {string} filter - Optional filter to retrieve products based on categories.
 * @returns {Promise<Array>} A promise that resolves to an array of frontpage products.
 */

export default async function FetchFrontpageProduct(filter = null) {
  let query;
  if (filter) {
    query = `*[_type=='product' && '${filter}' in categories[]->name]{
      "categories": categories[]->name,
      "previewImage":preview.asset->url,
      name,
      price,
      "slug": slug.current,
    }`;
  } else {
    query = `*[_type=='product']{
      "previewImage":preview.asset->url,
      name,
      price,
      "slug": slug.current,
      "categories": categories[]->name
    }`;
  }

  try {
    const products = await sanity.fetch(query);
    return products;
  } catch (error) {
    console.log(Error.message);
    alert(Error.message);
  }
}
