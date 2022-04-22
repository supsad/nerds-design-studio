const switchElements = document.querySelectorAll('.slider__switch-button');
const sliderElements = document.querySelectorAll('.slider');

const currentItemChecker = function (current) {
  let currentItem;
  for (let i = 0; i < current.length; i++) {
    if (current[i].classList.contains('slider_current') ||
      current[i].classList.contains('slider__switch-button_current')) {
      currentItem = current[i];
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

const addCurrentSliderHandler = function (currentButton, currentSlider) {
  currentButton.addEventListener('click', function () {
    currentItemDel(switchElements, sliderElements);
    currentButton.classList.add('slider__switch-button_current');
    currentButton.setAttribute('disabled', '');
    currentSlider.classList.add('slider_current');
  });
};

for (let i = 0; i < sliderElements.length; i++) {
  addCurrentSliderHandler(switchElements[i], sliderElements[i]);
}
