import './gallery-mini-photos.js';
import './modal-photo.js';
import './form.js';
import {getData} from './api.js';
import {renderPhotoElements} from './gallery-mini-photos.js';
import {showAlert} from './util.js';
import {setFormSubmit, closeForm} from './form.js';

getData()
  .then((photos) => {
    renderPhotoElements(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setFormSubmit(closeForm);
