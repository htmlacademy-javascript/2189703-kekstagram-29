import {isEscapeKey} from './util.js';
const PART_COMMENTS = 5;
const photoClick = document.querySelector('.big-picture');
const photoComments = photoClick.querySelector('.social__comments');
const commentTemplate = photoClick.querySelector('.social__comment');
const commentCount = photoClick.querySelector('.social__comment-count');
const commentsLoader = photoClick.querySelector('.comments-loader');
const backScreen = document.querySelector('body');
const photoViewClose = photoClick.querySelector('#picture-cancel');

const minComments = 0;

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

  const commentModal = comments.slice(minComments, modalComments);
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

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto () {
  photoClick.classList.add('hidden');
  backScreen.classList.remove('modal-open');
  modalComments = 0;

  document.removeEventListener('keydown', onDocumentKeydown);
}


const onCanselButtonClick = () => {
  closeBigPhoto();
};

const onCommentLoaderClick = () => {
  renderComments();
};

const renderPhotoClickClass = (({url, description, likes}) => {
  photoClick.querySelector('.big-picture__img img').src = `./photos/${ url}`;
  photoClick.querySelector('.big-picture__img img').alt = description;
  photoClick.querySelector('.likes-count').textContent = likes;
  photoClick.querySelector('.social__caption').textContent = description;
});


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

photoViewClose.addEventListener('click', onCanselButtonClick);
commentsLoader.addEventListener('click', onCommentLoaderClick);

export {openBigPhoto};
