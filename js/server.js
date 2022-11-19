const GET_URL = 'https://27.javascript.pages.academy/keksobooking/data';
const SEND_URL = 'https://27.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => fetch(GET_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((adds) => {
    const newArray = adds.slice();
    onSuccess(newArray);
  })
  .catch(() => {
    onFail('Произошла ошибка при загрузке. Попробуйте снова.');
  });

const sendData = (onSuccess, onFail, body) =>
  fetch(SEND_URL,
    {
      method: 'POST',
      credentials: 'same-origin',
      body: body,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      onSuccess();
    })
    .catch(() => onFail());

export { getData, sendData };