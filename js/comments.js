//import {photosDescription} from './data.js';

const photoView = document.querySelector('.big-picture');


const photoComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');

const createGaleryComment = (({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
});

const renderComments = (comments) => {
  photoComments.innerHTML = '';
  const commentListFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createGaleryComment(comment);

    commentListFragment.append(commentElement);
  });
  photoComments.appendChild(commentListFragment);
};

export {renderComments};


