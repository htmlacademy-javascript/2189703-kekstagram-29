import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const modalForm = document.querySelector('.img-upload__overlay');
const choicePhoto = document.querySelector('.img-upload__input');
const backScreen = document.querySelector('body');
const buttonCloseForm = form.querySelector('.img-upload__cancel');
const hashtagsUser = form.querySelector('.text__hashtags');
const commentUser = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper-error-wrapper',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
 //   console.log('OK');
  } else {
 //   console.log('Non!!!');
  }
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const onChoiceFormInput = () => {
  openForm();
};
const onButtonCloseFormClick = () => {
  closeForm();
};

choicePhoto.addEventListener('input', onChoiceFormInput);
buttonCloseForm.addEventListener('click', onButtonCloseFormClick);

const onEscKeydown = () => {
  hashtagsUser.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
  commentUser.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
};


function openForm () {
  modalForm.classList.remove('hidden');
  backScreen.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  onEscKeydown ();
}

function closeForm () {
  modalForm.classList.add('hidden');
  backScreen.classList.remove('modal-open');
  form.reset();

  document.removeEventListener('keydown', onDocumentKeydown);
}


