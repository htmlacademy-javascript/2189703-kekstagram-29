import './gallery-mini-photos.js';
import './modal-photo.js';
import './form.js';
import {getData} from './api.js';
import {sortGallery} from './gallery-mini-photos.js';
import {showAlert} from './util.js';
import {setFormSubmit, closeForm} from './form.js';


getData()
  .then((photos) => {
    sortGallery(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


setFormSubmit(closeForm);
