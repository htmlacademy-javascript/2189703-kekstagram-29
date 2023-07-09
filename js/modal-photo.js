import {isEscapeKey} from './util.js';
import {renderComments, photoClick, renderPhotoClickClass} from './gallery-modal-photo.js';

export const commentCount = document.querySelector('.social__comment-count');
export const commentsLoader = document.querySelector('.comments-loader');
const backScreen = document.querySelector('body');
const photoViewClose = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};


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

photoViewClose.addEventListener('click', () => {
  closeBigPhoto();
});

commentsLoader.addEventListener('click', (data) => {
//  console.log('click');
  renderComments(data.comments);
});

export {openBigPhoto};
