import {isEscapeKey} from './util.js';
import {scaleReset, onClickMinusScale, onClickPlusScale} from './scale.js';
import {sliderReset} from './slider.js';
import {sendData} from './api.js';
import {openShowSuccess, openShowError} from './message.js';

const TEXT_BUTTON_DEFAULT = 'Опубликовать';
const TEXT_BUTTON_BLOCKED = 'Публикую...';
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HACHTAG = 5;

const form = document.querySelector('.img-upload__form');
const modalForm = form.querySelector('.img-upload__overlay');
const choicePhoto = form.querySelector('.img-upload__input');
const backScreen = document.querySelector('body');
const buttonCloseForm = form.querySelector('.img-upload__cancel');
const hashtagsUser = form.querySelector('.text__hashtags');
const commentUser = form.querySelector('.text__description');
const buttonSubmit = form.querySelector('.img-upload__submit');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper-error-wrapper',
});

const workSubmitButton = (work, text) => {
  buttonSubmit.disabled = work;
  buttonSubmit.textContent = text;
};

const hashtagsUserArray = (string) => string.trim().split(' ').filter((array) => Boolean(array.length));

const hashtagsUserValidSum = (value) => hashtagsUserArray(value).length <= MAX_HACHTAG;
const hashtagsUserValidHashtag = (value) => hashtagsUserArray(value).every((string) => VALID_HASHTAG.test(string));
const hashtagsUserValidUnique = (value) => {
  const hashtagsUserArrayLover = hashtagsUserArray(value).map((string) => string.toLowerCase());
  return hashtagsUserArrayLover.length === new Set(hashtagsUserArrayLover).size;
};

const errorTextValidSum = () => `Нельзя вводить больше ${ MAX_HACHTAG } хештегов!`;
const errorTextValidHashtag = () => 'Хештег введён некорректно!';
const errorTextValidUnique = () => 'Недопустимо вводить одинаковые хештеги!';

pristine.addValidator(hashtagsUser, hashtagsUserValidSum, errorTextValidSum, 3);
pristine.addValidator(hashtagsUser, hashtagsUserValidHashtag, errorTextValidHashtag, 2);
pristine.addValidator(hashtagsUser, hashtagsUserValidUnique, errorTextValidUnique, 1);

const setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      workSubmitButton(true, TEXT_BUTTON_BLOCKED);
      sendData(
        () => {
          onSuccess();
          workSubmitButton(false, TEXT_BUTTON_DEFAULT);
          openShowSuccess();
        },
        () => {
          openShowError();
          workSubmitButton(false, TEXT_BUTTON_DEFAULT);
        },
        new FormData(evt.target),
      );

    }
  });
};


const onFormKeydown = (evt) => {
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
  onClickMinusScale();
  onClickPlusScale();

  form.addEventListener('keydown', onFormKeydown);
  onEscKeydown ();
}

function closeForm () {
  modalForm.classList.add('hidden');
  backScreen.classList.remove('modal-open');
  form.reset();
  scaleReset();
  sliderReset();

  form.removeEventListener('keydown', onFormKeydown);
}

export {closeForm, setFormSubmit};
