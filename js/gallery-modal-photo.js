import {commentCount, commentsLoader} from './modal-photo.js';

const photoClick = document.querySelector('.big-picture');


const renderPhotoClickClass = (({url, description, likes, comments}) => {
  photoClick.querySelector('.big-picture__img img').src = `./photos/${ url}`;
  photoClick.querySelector('.big-picture__img img').alt = description;
  photoClick.querySelector('.likes-count').textContent = likes;
  photoClick.querySelector('.comments-count').textContent = comments.length;
  photoClick.querySelector('.social__caption').textContent = description;

  return photoClick;
});

const photoComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');

const createGaleryComment = (({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
});

const minComments = 0;
const partComments = 5;

let modalComments = 0;
export let partCommentModal = 0;


const renderComments = (comments) => {
  const commentsAll = comments.length;
  photoComments.innerHTML = '';

  const commentListFragment = document.createDocumentFragment();

  partCommentModal += partComments;
  if (commentsAll <= partCommentModal) {
    modalComments = commentsAll;
  } else {
    commentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    modalComments += partComments;
    commentCount.textContent = `${modalComments } из ${ commentsAll }  комментариев`;
  }

  const commentModal = comments.slice(minComments, modalComments);

  commentModal.forEach((comment) => {
    const commentElement = createGaleryComment(comment);
    commentListFragment.append(commentElement);
  });
  photoComments.appendChild(commentListFragment);
};


export {renderComments, photoClick, renderPhotoClickClass};
