/**
 * Initializes a slideshow with previous and next buttons.
 */

export default function slideShowProductImage() {
  let currentSlideIndex = 0;

  // query selector
  const slideshow = document.querySelector(".slideShowProduct");
  const buttonPrevious = document.querySelector(
    ".slideShowProduct__button-previous"
  );
  const buttonNext = document.querySelector(".slideShowProduct__button-next");

  if (slideshow) {
    // Select all the slide elements within the slideshow
    const slideShowSlides = slideshow.querySelectorAll(
      ".slideShowProduct__slide"
    );

    // Add event listeners
    buttonPrevious.addEventListener("click", handleButtonPreviousClick);
    buttonNext.addEventListener("click", handleButtonNextClick);
    window.addEventListener("keyup", handleWindowKeyUp);

    /**
     * Event handler for the previous button click event.
     */
    function handleButtonPreviousClick() {
      decreaseCurrentSlideIndex();
      renderHtml();
    }

    function handleButtonNextClick() {
      increaseCurrentSlideIndex();
      renderHtml();
    }

    /**
     * Event handler for the keyup event (arrow keys).
     * @param {KeyboardEvent} event - The keyup event object.
     */
    function handleWindowKeyUp(event) {
      if (event.key === "ArrowRight") {
        increaseCurrentSlideIndex();
        renderHtml();
      } else if (event.key === "ArrowLeft") {
        decreaseCurrentSlideIndex();
        renderHtml();
      }
    }

    /**
     *
     *
     * Method to Decreases the current slide index.
     */
    function decreaseCurrentSlideIndex() {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
      } else {
        currentSlideIndex = slideShowSlides.length - 1;
      }
    }

    /**
     * Method to Increase the current slide index.
     */
    function increaseCurrentSlideIndex() {
      if (currentSlideIndex < slideShowSlides.length - 1) {
        currentSlideIndex++;
      } else {
        currentSlideIndex = 0;
      }
    }

    /**
     * Renders the HTML by adding/removing CSS classes for the active slide.
     */
    function renderHtml() {
      for (const slide of slideShowSlides) {
        slide.classList.remove("slideShowProduct__slide--active");
      }

      slideShowSlides[currentSlideIndex].classList.add(
        "slideShowProduct__slide--active"
      );
    }

    // Render the initial HTML
    renderHtml();
  }
}
