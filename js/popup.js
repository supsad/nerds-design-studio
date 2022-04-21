const popupMessageUs = document.querySelector('.modal-message');

const popupOpenButton = document.querySelector('.address__button');
const popupCloseButton = popupMessageUs.querySelector('.modal-message__close-button');

const popupForm = popupMessageUs.querySelector('.modal-message__form');
const popupUserName = popupMessageUs.querySelector('[name=popup-username]');
const popupEmail = popupMessageUs.querySelector('[name=email]');
const popupTextareaMessage = popupMessageUs.querySelector('[name=popup-message]');

let isPopupStorageSupport = true;
const popupStorage = '';

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
    } else {
      if (isPopupStorageSupport) {
        localStorage.setItem('user-name', popupUserName.value);
        localStorage.setItem('user-email', popupEmail.value);
      }
    }
  }
});

popupForm.addEventListener('submit', function (evt) {
  if (!popupUserName.value || !popupEmail.value || !popupTextareaMessage.value) {
    evt.preventDefault();
    alert('Вы не заполнили обязательные поля! ' +
      'Перед отправкой сообщения, пожалуйста, заполните все поля.');
  }
});
