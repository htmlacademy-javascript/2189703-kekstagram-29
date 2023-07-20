import {isEscapeKey} from './util.js';
const SHOW_TIME = 5000;

const body = document.querySelector('body');
const success = document.querySelector('#success').content.querySelector('.success');
const successButton = success.querySelector('.success__button');
const error = document.querySelector('#error').content.querySelector('.error');
const errorButton = error.querySelector('.error__button');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeShowSuccess();
    closeShowError();
  }
};

const onSuccessButtonClick = () => {
  closeShowSuccess();
};

const onErrorButtonClick = () => {
  closeShowError();
};

body.addEventListener('click', () => {
  onSuccessButtonClick();
  onErrorButtonClick();
});

function openShowSuccess () {
  document.body.append(success);

  document.addEventListener('keydown', onDocumentKeydown);


  setTimeout(() => {
    success.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }, SHOW_TIME);
}

function closeShowSuccess () {
  success.remove();

  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onSuccessButtonClick);
}

function openShowError () {
  document.body.append(error);

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeShowError () {
  error.remove();

  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onErrorButtonClick);

}

successButton.addEventListener('click', onSuccessButtonClick);
errorButton.addEventListener('click', onErrorButtonClick);

export {openShowSuccess, openShowError};
