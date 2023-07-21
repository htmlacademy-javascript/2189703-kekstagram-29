import {isEscapeKey} from './util.js';
const PART_COMMENTS = 5;
const MIN_COMMENTS = 0;

const photoClick = document.querySelector('.big-picture');
const photoComments = photoClick.querySelector('.social__comments');
const commentTemplate = photoClick.querySelector('.social__comment');
const commentCount = photoClick.querySelector('.social__comment-count');
const commentsLoader = photoClick.querySelector('.comments-loader');
const backScreen = document.querySelector('body');
const photoViewClose = photoClick.querySelector('#picture-cancel');

let comments = [];

const createGaleryComment = (({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
});

let modalComments = 0;

const renderComments = () => {

  modalComments += PART_COMMENTS;

  if (comments.length <= modalComments) {
    commentsLoader.classList.add('hidden');
    modalComments = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const commentModal = comments.slice(MIN_COMMENTS, modalComments);
  const commentListFragment = document.createDocumentFragment();
  commentModal.forEach((comment) => {

    const commentElement = createGaleryComment(comment);
    commentListFragment.append(commentElement);
  });
  commentCount.classList.remove('hidden');
  commentCount.textContent = `${modalComments } из ${ comments.length }  комментариев`;

  photoComments.innerHTML = '';
  photoComments.appendChild(commentListFragment);
};

const renderPhotoClickClass = (({url, description, likes}) => {
  photoClick.querySelector('.big-picture__img img').src = url;
  photoClick.querySelector('.big-picture__img img').alt = description;
  photoClick.querySelector('.likes-count').textContent = likes;
  photoClick.querySelector('.social__caption').textContent = description;

  return photoClick;
});

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
  comments = data.comments;
  renderComments();

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPhoto () {
  photoClick.classList.add('hidden');
  backScreen.classList.remove('modal-open');
  modalComments = 0;

  document.removeEventListener('keydown', onDocumentKeydown);
}

const onCanselButtonClick = () => {
  closeBigPhoto();
};

const onCommentLoadClick = () => {
  renderComments();
};

photoViewClose.addEventListener('click', onCanselButtonClick);
commentsLoader.addEventListener('click', onCommentLoadClick);

export {openBigPhoto};
