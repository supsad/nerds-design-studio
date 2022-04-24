const popupMessageUs = document.querySelector('.modal-message');

const popupOpenButton = document.querySelector('.address__button');
const popupCloseButton = popupMessageUs.querySelector('.modal-message__close-button');

const popupForm = popupMessageUs.querySelector('.modal-message__form');
const popupUserName = popupMessageUs.querySelector('[name=modal-username]');
const popupUserEmail = popupMessageUs.querySelector('[name=modal-email]');
const popupTextareaMessage = popupMessageUs.querySelector('[name=modal-message]');

let isPopupStorageSupport = true;
let popupStorage = '';

const alertErrMessage = function (message) {
  alert(message);
};

const closePopupHandler = function (item) {
  const closePopup = function () {
    item.classList.remove('modal-message_show');
  };

  const closePopupAnim = function () {
    item.classList.remove('modal-message_close');
  };

  item.classList.add('modal-message_close');
  setTimeout(closePopupAnim, 600);
  setTimeout(closePopup, 500);
}

try {
  popupNameStorage = localStorage.getItem('user-name');
  popupEmailStorage = localStorage.getItem('user-email');
} catch (err) {
  isPopupStorageSupport = false;
}

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMessageUs.classList.add('modal-message_show');

  if (popupNameStorage) {
    popupUserName.value = popupNameStorage;
    popupUserEmail.focus();
    if (popupEmailStorage) {
      popupUserEmail.value = popupEmailStorage;
      popupTextareaMessage.focus();
    }
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
  closePopupHandler(popupMessageUs);
  popupMessageUs.classList.remove('modal-message_error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (popupMessageUs.classList.contains('modal-message_show')) {
      evt.preventDefault();
      closePopupHandler(popupMessageUs);
      popupMessageUs.classList.remove('modal-message_error');
    }
  }
});

