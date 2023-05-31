import { sanity } from "../sanity.js";
import { readUrl } from "../util/readUrl.js";
import { displayError } from "./handleError.js";

/**
 * Fetches the contact us page based on the current URL slug.
 *
 * @returns {Promise<object>} A promise that resolves to the contact us page data.
 */
export default async function FetchContactUsPage() {
  const urlString = readUrl();

  const queryContact = `
    *[_type == "contact" && slug.current == "${urlString}"]{
      ...,
      "slug": slug.current,
    }
  `;

  try {
    const contact = await sanity.fetch(queryContact);
    return contact;
  } catch (error) {
    displayError(error);
  }
}
