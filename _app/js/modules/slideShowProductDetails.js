export default function slideShowProductImage() {
  let currentSlideIndex = 0;

  const slideshow = document.querySelector(".slideShowProduct");
  const buttonPrevious = document.querySelector(
    ".slideShowProduct__button-previous"
  );
  const buttonNext = document.querySelector(".slideShowProduct__button-next");

  if (slideshow) {
    const slideShowSlides = slideshow.querySelectorAll(
      ".slideShowProduct__slide"
    );

    buttonPrevious.addEventListener("click", handleButtonPreviousClick);
    buttonNext.addEventListener("click", handleButtonNextClick);
    window.addEventListener("keyup", handleWindowKeyUp);

    function handleButtonPreviousClick() {
      decreaseCurrentSlideIndex();
      renderHtml();
    }

    function handleButtonNextClick() {
      increaseCurrentSlideIndex();
      renderHtml();
    }

    function handleWindowKeyUp(event) {
      if (event.key === "ArrowRight") {
        increaseCurrentSlideIndex();
        renderHtml();
      } else if (event.key === "ArrowLeft") {
        decreaseCurrentSlideIndex();
        renderHtml();
      }
    }

    function decreaseCurrentSlideIndex() {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
      } else {
        currentSlideIndex = slideShowSlides.length - 1;
      }
    }

    function increaseCurrentSlideIndex() {
      if (currentSlideIndex < slideShowSlides.length - 1) {
        currentSlideIndex++;
      } else {
        currentSlideIndex = 0;
      }
    }

    function renderHtml() {
      for (const slide of slideShowSlides) {
        slide.classList.remove("slideShowProduct__slide--active");
      }

      slideShowSlides[currentSlideIndex].classList.add(
        "slideShowProduct__slide--active"
      );
    }

    renderHtml();
  }
}
