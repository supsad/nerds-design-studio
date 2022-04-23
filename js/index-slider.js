const switchElements = document.querySelectorAll('.slider__switch-button');
const sliderElements = document.querySelectorAll('.slider');

// let currentElementId;

const currentItemChecker = function (items) {
  let currentItem;
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('slider_current') ||
      items[i].classList.contains('slider__switch-button_current')) {
      currentItem = items[i];
      // currentElementId = i - 1;
    }
  }

  return currentItem;
};

const currentItemDel = function (currentButton, currentSlider) {
  let removeActiveButton = currentItemChecker(currentButton);
  removeActiveButton.classList.remove('slider__switch-button_current');
  removeActiveButton.removeAttribute('disabled');

  let removeActiveSlider = currentItemChecker(currentSlider);
  removeActiveSlider.classList.remove('slider_current');
};

// This element don't work and I decided not to include it in the assembly

// const addNextFocusHandler = function (items) {
//   const firstItemId = 0;
//   const lastItemId = switchElements.length - 1;
//   currentItemChecker(items);
//   if (currentElementId === lastItemId) {
//     currentElementId = firstItemId;
//     switchElements[currentElementId].focus();
//   } else {
//     currentElementId += 1;
//     switchElements[currentElementId].focus();
//   }
// };

const addCurrentSliderHandler = function (currentButton, currentSlider) {
  currentButton.addEventListener('click', function () {
    currentItemDel(switchElements, sliderElements);
    currentButton.classList.add('slider__switch-button_current');
    currentButton.setAttribute('disabled', '');
    currentSlider.classList.add('slider_current');
    // addNextFocusHandler(switchElements);
  });
};

for (let i = 0; i < sliderElements.length; i++) {
  addCurrentSliderHandler(switchElements[i], sliderElements[i]);
}
