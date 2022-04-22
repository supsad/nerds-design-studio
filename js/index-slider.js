const sliderSwitch = document.querySelectorAll('.slider__switch-button');
const sliderBlocks = document.querySelectorAll('.slider');
console.log(sliderSwitch);
console.log(sliderBlocks);

for (let i = 0; i < sliderSwitch.length; i++) {
  sliderSwitch[i].addEventListener('click', function () {
    console.log(sliderBlocks);
    sliderBlocks[i].classList.add('slider_current');
  });
}
