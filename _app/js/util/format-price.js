/**
 * Formats a price with the currency symbol.
 *
 * @param {number} price - The price to format.
 * @returns {string} The formatted price with the currency symbol.
 */
export default function formatPrice(price) {
  // Format the price using the "nb-NO" locale
  const formatted = price.toLocaleString("nb-NO");

  // Return the formatted price with the currency symbol
  return `${formatted} NOK`;
}

// code provided by Alejandro during project demonstration class
