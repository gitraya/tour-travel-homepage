const allSlideContent = [...document.querySelectorAll('.myslide')];
let countIndex = 0;
let maxIndex = allSlideContent.length - 1;

// Function to the previous slide
const prevSlides = (i) => {
  if (countIndex === 0) {
    return;
  } else {
    showSlide((countIndex -= i));
  }
};

// Function to the next slide
const nextSlides = (i) => {
  if (countIndex === maxIndex) {
    return;
  } else {
    showSlide((countIndex += i));
  }
};

// Function to showing the slide
const showSlide = (i) => {
  if (i > maxIndex) {
    countIndex = 0;
  } else if (i < 0) {
    countIndex = maxIndex;
  }

  // Filtering slides
  allSlideContent.filter((slide) => {
    slide.classList.remove('active');
  });
  allSlideContent[countIndex].classList.add('active');

  switch (countIndex) {
    case 0:
      document.querySelector('.prevBtn').classList.add('off');
      document.querySelector('.nextBtn').classList.remove('off');
      break;
    case maxIndex:
      document.querySelector('.nextBtn').classList.add('off');
      document.querySelector('.prevBtn').classList.remove('off');
      break;
  }
};

// Run Function
showSlide(countIndex);
