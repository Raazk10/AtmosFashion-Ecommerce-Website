import { sanity } from "../sanity.js";

export default async function FetchMainpageProduct(filter = null) {
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
