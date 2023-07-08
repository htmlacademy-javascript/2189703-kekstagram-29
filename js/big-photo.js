import {isEscapeKey} from './util.js';
import {renderComments} from './comments.js';

const photoClick = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const backScreen = document.querySelector('body');
const photoViewClose = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const renderPhotoClickClass = (({url, description, likes, comments}) => {
  photoClick.querySelector('.big-picture__img img').src = './photos/' + url;
  photoClick.querySelector('.big-picture__img img').alt = description;
  photoClick.querySelector('.likes-count').textContent = likes;
  photoClick.querySelector('.comments-count').textContent = comments.length;
  photoClick.querySelector('.social__caption').textContent = description;

  return photoClick;
});


function openBigPhoto (data) {
  photoClick.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  backScreen.classList.add('modal-open');

  renderPhotoClickClass(data);
  renderComments(data.comments);

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPhoto () {
  photoClick.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}
// переименовать!!!ы
const onBigPhotoClose = photoViewClose.addEventListener('click', () => {
  closeBigPhoto();
});


export {openBigPhoto};

