import { sanity } from "../sanity.js";
import { readUrl } from "../util/readUrl.js";

/**
 * Fetches product details from the server based on the current URL.
 *
 * @returns {Promise<object>} A Promise resolving to the product details.
 */

export default async function FetchProductDetails() {
  // Read the current URL
  const urlString = readUrl();

  // Build the query to fetch product details based on the URL
  const query = `*[slug.current == '${urlString}']{
    _id,
    "categories": categories[]->name,
    "previewImage": preview.asset->url,
    name,
    price,
    "description": description,
    "images": image[].asset->url,
    "color": color,
    "sizes": sizes,
    "subtitle": subtitle,
    "brand": brand,
    stock
  }`;

  // Fetch the product details using the query
  const product = await sanity.fetch(query);
  return product[0];
}
