import './gallery-mini-photos.js';
import './modal-photo.js';
import './form.js';
import './user-photo.js';
import {getData} from './api.js';
import {renderPhotoElements, sortGallery} from './gallery-mini-photos.js';
import {showAlert} from './util.js';
import {setFormSubmit, closeForm} from './form.js';
// import { debounce } from './util.js';

// const RERENDER_DELAY = 500;


getData()
  .then((photos) => {
    renderPhotoElements(photos);
    // debounce(sortGallery(photos), RERENDER_DELAY);
    sortGallery(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


setFormSubmit(closeForm);
