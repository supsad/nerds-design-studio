const popupMessageUs = document.querySelector('.modal-message');
const popupOpenButton = document.querySelector('.address__button');
const popupCloseButton = popupMessageUs.querySelector('.modal-message__close-button');
const popupUserName = popupMessageUs.querySelector('[name=popup-username]');

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.add('modal-message_show');

  popupUserName.focus();
});

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.remove('modal-message_show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (popupMessageUs.classList.contains('modal-message_show')) {
      evt.preventDefault();
      popupMessageUs.classList.remove('modal-message_show');
    }
  }
});
