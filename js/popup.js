const popupMessageUs = document.querySelector('.modal-message');

const popupOpenButton = document.querySelector('.address__button');
const popupCloseButton = popupMessageUs.querySelector('.modal-message__close-button');

const popupForm = popupMessageUs.querySelector('.modal-message__form');
const popupUserName = popupMessageUs.querySelector('[name=popup-username]');
const popupUserEmail = popupMessageUs.querySelector('[name=email]');
const popupTextareaMessage = popupMessageUs.querySelector('[name=popup-message]');

let isPopupStorageSupport = true;
let popupStorage = '';

const alertErrMessage = function (message) {
  alert(message);
};

try {
  popupStorage = localStorage.getItem('user-name');
  popupStorage = localStorage.getItem('user-email');
} catch (err) {
  isPopupStorageSupport = false;
}

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.add('modal-message_show');

  if (popupStorage) {
    popupUserName.value = popupStorage;
    popupUserEmail.focus();
  } else if (popupStorage) {
    popupUserEmail.value = popupStorage;
    popupTextareaMessage.focus();
  } else {
    popupUserName.focus();
  }
});

popupForm.addEventListener('submit', function (evt) {
  if (!popupUserName.value || !popupUserEmail.value || !popupTextareaMessage.value) {
    evt.preventDefault();
    popupMessageUs.classList.remove('modal-message_error');
    popupMessageUs.offsetWidth = popupMessageUs.offsetWidth;
    popupMessageUs.classList.add('modal-message_error');
    setTimeout(alertErrMessage, 300, 'Вы не заполнили обязательные поля!\n' +
      'Перед отправкой сообщения, пожалуйста, заполните все поля.')
  } else {
    if (isPopupStorageSupport) {
      localStorage.setItem('user-name', popupUserName.value);
      localStorage.setItem('user-email', popupUserEmail.value);
    }
  }
});

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.remove('modal-message_show');
  popupMessageUs.classList.remove('modal-message_error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (popupMessageUs.classList.contains('modal-message_show')) {
      evt.preventDefault();
      popupMessageUs.classList.remove('modal-message_show');
      popupMessageUs.classList.remove('modal-message_error');
    }
  }
});

