const FILE_TYPES = ['jpg', 'jpeg', 'png'];


const fileChooser = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matched = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matched) {
    preview.src = URL.createObjectURL(file);
  }
});
