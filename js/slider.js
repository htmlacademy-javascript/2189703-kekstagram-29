const Effects = {
  chrome: {
    filter: 'grayscale',
    dimension: '',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  sepia: {
    filter: 'sepia',
    dimension: '',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  marvin: {
    filter: 'invert',
    dimension: '%',
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  phobos: {
    filter: 'blur',
    dimension: 'px',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  heat: {
    filter: 'brightness',
    dimension: '',
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

const sliderEffect = document.querySelector('.effect-level__slider');
const valueEffect = document.querySelector('.effect-level__value');
const checkedEffects = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderEffect, {
  range: {
    min: 10,
    max: 50,
  },
  start: 10,
  step: 5,
  connect: 'lower',
});

function sliderReset () {
  slider.classList.add('hidden');
  imgPreview.removeAttribute('style');
}
sliderReset();

checkedEffects.forEach((effect) => {
  effect.addEventListener('change', () => {
    slider.classList.remove('hidden');
    switch (effect.value) {
      case 'chrome':
        effect = Effects.chrome;
        break;
      case 'sepia':
        effect = Effects.sepia;
        break;
      case 'marvin':
        effect = Effects.marvin;
        break;
      case 'phobos':
        effect = Effects.phobos;
        break;
      case 'heat':
        effect = Effects.heat;
        break;
      case 'none':
        sliderReset();
    }
    try {
      sliderEffect.noUiSlider.updateOptions ({
        range: effect.range,
        start: effect.start,
        step: effect.step,
      });
      sliderEffect.noUiSlider.on('update',() => {
        valueEffect.value = sliderEffect.noUiSlider.get();
        imgPreview.style.filter = `${effect.filter }(${ valueEffect.value }${effect.dimension})`;
      });
    } catch {
      imgPreview.removeAttribute('style');
    }

  });
});
export {sliderReset};


