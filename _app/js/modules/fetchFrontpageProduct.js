import { sanity } from "../sanity.js";
import { displayError } from "./handleError.js";

/**
 * Fetches frontpage products from Sanity CMS.
 *
 * @param {string} filter - Optional filter to retrieve products based on categories.
 * @returns {Promise<Array>} A promise that resolves to an array of frontpage products.
 */

export default async function FetchFrontpageProduct(filter = null) {
  let query;
  // Check if a filter is provided
  if (filter) {
    // Construct query with filter
    query = `*[_type=='product' && '${filter}' in categories[]->name]{
      _id,
      "categories": categories[]->name,
      "previewImage":preview.asset->url,
      name,
      price,
      "slug": slug.current,
    }`;
  } else {
    // Construct query without filter
    query = `*[_type=='product']{
      _id,
      "previewImage":preview.asset->url,
      name,
      price,
      "slug": slug.current,
      "categories": categories[]->name
    }`;
  }

  try {
    // Fetch products using the constructed query
    const products = await sanity.fetch(query);
    return products;
  } catch (error) {
    displayError(error);
  }
}
