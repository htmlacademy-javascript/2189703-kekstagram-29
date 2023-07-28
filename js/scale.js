const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;
const scale = document.querySelector('.scale');
const scaleSmaller = scale.querySelector('.scale__control--smaller');
const scaleBigger = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value ');
const preview = document.querySelector('.img-upload__preview img');

const onClickMinusScale = () => {
  let value = parseInt(scaleValue.value, 10);

  if (value > MIN_SCALE) {
    value = value - STEP_SCALE;
    scaleValue.value = `${value }%`;
    preview.style.transform = `scale(${ value / 100 })`;
  } else {
    value = MIN_SCALE;
  }
};

const onClickPlusScale = () => {
  let value = parseInt(scaleValue.value, 10);

  if (value < MAX_SCALE) {
    value = value + STEP_SCALE;
    scaleValue.value = `${value }%`;
    preview.style.transform = `scale(${ value / 100 })`;
  } else {
    value = MAX_SCALE;
  }
};

scaleSmaller.addEventListener('click', onClickMinusScale);
scaleBigger.addEventListener('click', onClickPlusScale);


const scaleReset = () => {
  preview.style.transform = 'scale(1)';
};

export {scaleReset, onClickMinusScale, onClickPlusScale};
