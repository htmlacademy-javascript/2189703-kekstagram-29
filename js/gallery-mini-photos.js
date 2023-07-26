import {openBigPhoto} from './modal-photo.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;
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
  filters.addEventListener('click', debounce((evt) => {
    switch (evt.target.id) {
      case 'filter-random':
        filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');

        evt.target.classList.add('img-filters__button--active');
        break;
      case 'filter-discussed':
        filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');

        evt.target.classList.add('img-filters__button--active');
        break;
      case 'filter-default':
        filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');

        filters.querySelector('#filter-default').classList.add('img-filters__button--active');
        break;
    }
    sortGaleryPhoto();
  }, RERENDER_DELAY)
  );
};


function sortGaleryPhoto () {
  const filterActive = filters.querySelector('.img-filters__button--active');
  switch (filterActive.id) {
    case 'filter-random':
      showSortPhoto = [...sortPhotos].sort(sortRandom).slice(0, MAX_SHOW);
      break;
    case 'filter-discussed':
      showSortPhoto = [...sortPhotos].sort(sortDiscussed);
      break;
    default:
      showSortPhoto = [...sortPhotos];
  }

  renderPhotoElements(showSortPhoto);
}

const sortGallery = (photos) => {
  sortPhotos = [...photos];
  showSortPhoto = sortPhotos;

  filters.classList.remove('img-filters--inactive');
  onFilterClick();
};

export {sortGallery,renderPhotoElements};
