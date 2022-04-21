const popupMessageUs = document.querySelector('.modal-message');
const popupOpenButton = document.querySelector('.address__button');

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.add('modal-message_show');
});

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.remove('modal-message_show');
});


