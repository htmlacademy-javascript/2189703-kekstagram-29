import {photosDescription} from './data.js';
import {openBigPhoto} from './modal-photo.js';

const photoListElements = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');

const createPhotoElement = ({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = `./photos/${ url}`;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  return photoElement;
};
const renderPhotoElements = (photos) => {
  const photoListFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoElement = createPhotoElement(photo);

    photoElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPhoto(photo);
    });

    photoListFragment.append(photoElement);
  });
  photoListElements.append(photoListFragment);
};


renderPhotoElements(photosDescription);
