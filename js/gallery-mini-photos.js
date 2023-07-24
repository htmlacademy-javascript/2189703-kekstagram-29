import {openBigPhoto} from './modal-photo.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 1000;

const MAX_SHOW = 10;

const photoListElements = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');
const filters = document.querySelector('.img-filters');
let sortPhotos = [];
let showSortPhoto = [];

const createPhotoElement = ({url, description, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  return photoElement;
};

const renderPhotoElements = (photos) => {
  photoListElements.querySelectorAll('.picture').forEach((element) => element.remove());

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

const sortRandom = () => Math.random() - 0.5;

const sortDiscussed = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const onFilterClick = () => {
  filters.addEventListener('click', (evt) => {
    filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    switch (evt.target.id) {
      case 'filter-random':

        evt.target.classList.add('img-filters__button--active');
        showSortPhoto = [...sortPhotos].sort(sortRandom).slice(0, MAX_SHOW);
        break;
      case 'filter-discussed':
        evt.target.classList.add('img-filters__button--active');
        showSortPhoto = [...sortPhotos].sort(sortDiscussed);
        break;
      case 'filter-default':
        filters.querySelector('#filter-default').classList.add('img-filters__button--active');
        showSortPhoto = [...sortPhotos];
        break;
    }

    renderPhotoElements(showSortPhoto);
  });
};

const sortGallery = (photos) => {
  sortPhotos = [...photos];
  showSortPhoto = sortPhotos;

  renderPhotoElements(showSortPhoto);
  filters.classList.remove('img-filters--inactive');
  debounce(onFilterClick(), RERENDER_DELAY);
};

export {sortGallery,renderPhotoElements};
