/**
 * Displays the error on the page.
 * @param {Error} error - The error object.
 */
export function displayError(error) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-message");
  errorContainer.textContent = "An error occurred: " + error.message;

  const mainContent = document.querySelector("main");
  mainContent.appendChild(errorContainer);
}
