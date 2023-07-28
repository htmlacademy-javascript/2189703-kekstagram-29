const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const SEND_URL = 'https://29.javascript.pages.academy/kekstagram';

const getData = () => fetch(GET_URL)
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
  fetch(SEND_URL,
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
