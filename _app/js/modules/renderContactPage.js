import FetchContactUsPage from "./fetchContactPage.js";

/**
 * Renders the contact us page on the website.
 */
export default async function RenderContactUsPage() {
  /**
   * Retrieves the contact page details and renders them on the page.
   */
  async function getContactDetail() {
    const contact = await FetchContactUsPage();
    renderContact(contact);
  }

  /**
   * Renders the contact page details on the page.
   *
   * @param {Array} contact - The contact page data.
   */
  function renderContact(contact) {
    const contactDetailsContent = document.querySelector(
      ".contact-details__content"
    );
    const contactDetailsInfoName = document.querySelector(
      ".contact-details__info-name"
    );
    const contactDetailsInfoEmail = document.querySelector(
      ".contact-details__info-email"
    );
    const contactDetailsInfoPhone = document.querySelector(
      ".contact-details__info-phone"
    );
    const contactDetailsInfoAddress = document.querySelector(
      ".contact-details__info-address"
    );

    if (contact && contact.length > 0) {
      const contactContent = contact[0].content;
      contactDetailsContent.textContent = contactContent;

      const contactInfo = contact[0].contactInfo;
      contactDetailsInfoName.textContent = `Name: ${contactInfo.name}`;
      contactDetailsInfoEmail.textContent = `Email: ${contactInfo.email}`;
      contactDetailsInfoPhone.textContent = `Phone: ${contactInfo.phone}`;
      contactDetailsInfoAddress.textContent = `Address: ${contactInfo.address}`;
    } else {
      console.log("404 not found");
    }
  }

  // Get the "Go Back" button element
  const contactUsButton = document.getElementById("goBackButton");

  // Add an event listener to the button
  contactUsButton.addEventListener("click", () => {
    // Redirect the user to the contact-us page
    window.location.href = "/";
  });

  // Fetch and render the contact page details
  getContactDetail();
}
