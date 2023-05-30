/**
 * Reads the current URL and returns a specific value based on the URL.
 *
 * @returns {string|undefined} The specific value based on the URL, or `undefined` if no matching value is found.
 */

export function readUrl() {
  const allUrl = window.location.href;

  // Check if the URL contains "contact"
  if (allUrl.includes("contact")) {
    return "contact-us";
  }

  // Check if the URL contains "product"
  if (allUrl.includes("product")) {
    const urlString = window.location.search;

    // Check if there is a query string in the URL
    if (urlString) {
      return urlString.slice(1); // Slice removes the "?" from the URL
    }
  }

  return undefined;
}

// This code is provided by Carlo during veiledning time
