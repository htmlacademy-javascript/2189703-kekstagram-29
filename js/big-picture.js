import {photoListElements} from './pictures.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {photosDescription} from './data.js';


export const photoView = document.querySelector('.big-picture');
const photoViewClose = photoView.querySelector('.big-picture__cancel');

//Создаем галерею из больших фотографий в виде коллекции

const galeryPhotoView = [];

photosDescription.forEach(({url, description, likes, comments}) => {
  const galeryElement = photoView.cloneNode(true);
  galeryElement.querySelector('.big-picture__img').querySelector('img').src = `./photos/${ url}`;
  galeryElement.querySelector('.big-picture__img').querySelector('img').alt = description;
  galeryElement.querySelector('.likes-count').textContent = likes;
  galeryElement.querySelector('.comments-count').textContent = description;
  galeryElement.querySelector('.social__caption').textContent = comments.length;


  galeryPhotoView.push(galeryElement);

});

//console.log(galeryPhotoView);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

let photoClick;

function openBigPhoto (evt) {
  if (evt.target.closest('.picture')) {
    const src = `${evt.target.src }`;
    photoClick = galeryPhotoView.find((section) => section.querySelector('.big-picture__img').querySelector('img').src.includes(src));
    const main = document.querySelector('main');
    main.appendChild(photoClick);
    photoClick.classList.remove('hidden');
    photoClick.classList.add('new');
  }
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPhoto () {
  photoClick.classList.add('hidden');
  photoClick.classList.remove('new');
  document.removeEventListener('keydown', onDocumentKeydown);
}

// Доделать для нормального общего вида, продумать параметры (смотри const argumentBigPhoto и скринкаст на 23 минуте)
photoListElements.addEventListener('click', (evt) => {
  openBigPhoto(evt);
});

photoViewClose.addEventListener('click', () => {

  closeBigPhoto();
});

photoListElements.addEventListener('keydown', () => {
  if (isEnterKey(evt)) {
    openBigPhoto();
  }
});


