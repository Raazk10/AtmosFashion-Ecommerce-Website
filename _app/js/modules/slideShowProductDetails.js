export default function slideShowProductImage() {
  let currentSlideIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  const slideshow = document.querySelector(".slideShowProduct");

  const buttonPrevious = document.querySelector(
    ".slideShowProduct__button-previous"
  );
  const buttonNext = document.querySelector(".slideShowProduct__button-next");

  if (slideshow) {
    const slideShowSlides = slideshow.querySelectorAll(
      ".slideShowProduct__slide"
    );
    slideShowSlides.forEach((slide) => {
      slide.addEventListener("touchstart", handleTouchStart);
      slide.addEventListener("touchmove", handleTouchMove);
      slide.addEventListener("touchend", handleTouchEnd);
    });
    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
      touchEndX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
      if (touchStartX - touchEndX > 50) {
        // Swiped to the left, go to the next slide
        increaseCurrentSlideIndex();
        renderHtml();
      } else if (touchEndX - touchStartX > 50) {
        // Swiped to the right, go to the previous slide
        decreaseCurrentSlideIndex();
        renderHtml();
      }
    }

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
