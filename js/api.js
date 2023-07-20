const getData = () => fetch(
  'https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    throw new Error('Не удалось загрузить данные. Попробуйте обновить страницу');
  });

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://29.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    }
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail('Данные не валидны');
    }
  })
    .catch((err) => {
      onFail(err.message);
    });
};


export {getData, sendData};
