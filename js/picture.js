import {photosDescription} from './data.js';
// Отрисуйте сгенерированные DOM-элементы в блок .pictures.
const photoListElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');

const photoListFragment = document.createDocumentFragment();

photosDescription.forEach(({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = `./photos/${ url}`;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoListFragment.appendChild(photoElement);
});

photoListElement.appendChild(photoListFragment);


