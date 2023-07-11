// В файле main.js напишите необходимые функции для создания массива из 5 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
import {getRandomInteger} from './util.js';
const NUMBER_PHOTOS = 25;

const DESCRIPTION_PHONO = [
  'Пустой городской пляж с лежаками вокруг озера.',
  'Указатель дороги на пляж.',
  'Валуны на берегу.',
  'Девушка в бикини с фотоаапаратом на пляже.',
  'Блюдо из риса с морепродуктами.',
  'Кабриолет черного цвета во дворе.',
  'Клубника на блюде.',
  'Морс в прозрачной чашке.',
  'Самолет над пляжем.',
  'Выдвижная полка для обуви.',
  'Дорога к пляжу по песку между заборами.',
  'Белая легковая машина на дороге.',
  'Салат на блюде.',
  'Кот, упакованный как ролл.',
  'Ноги в новой обуви на белом диване.',
  'Самолёт над облаками.',
  'Хор на сцене.',
  'Красная легковая машина внутри дома из кирпича.',
  'Тапочки с подсветкой на ногах девочки в тёмной комнате.',
  'Двор с пальмама вечером с подсветкой.',
  'Завтрак на блюде.',
  'Солнце заходит прямо в море.',
  'Крабик на камне.',
  'Зрители тянут руки вверх.',
  'Джип заезжает в реку с бегемотом',
];
const MESSAGE = [
  'Всё отлично!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'В целом всё неплохо. Но не всё.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const AUTOR__COMMENT = [
  'Кекс',
  'Колокольчик',
  'Сладкоежка',
  'Бабочка',
  'Снежинка',
  'Артём',
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENT = 0;
const MAX_COMMENT = 30;

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.


let commentArray;

const comments = (a, b) => {
  commentArray = [];
  let commentObject = {};
  const amountComments = getRandomInteger(a, b);
  for (let i = 1;i < amountComments + 1; i ++) {
    const j = getRandomInteger(0, 5);

    commentObject = {
      id: i,
      avatar: `./img/avatar-${ j + 1 }.svg`,
      message: MESSAGE[j],
      name: AUTOR__COMMENT[j]
    };
    commentArray.push(commentObject);
  }
  return commentArray;
};

const photoDescription = (count) => {
  let photoObject = {};
  const photoArray = [];
  for (let i = 1;i < count + 1; i ++) {
    photoObject = {
      id: i,
      url: `${i }.jpg`,
      description: DESCRIPTION_PHONO[i - 1],
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: comments(MIN_COMMENT, MAX_COMMENT)
    };

    photoArray.push(photoObject);
  }
  return photoArray;
};
const photosDescription = photoDescription(NUMBER_PHOTOS);
export {photosDescription};
