// Функция для проверки длины строки.
function checkStringLength (string, maxString) {
  return string.length <= maxString;
}
checkStringLength ('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.
function testPalindrome (line) {
  let readyLine = line.replaceAll(' ', '');
  readyLine = readyLine.toLowerCase();
  let newLine = '';
  for (let i = readyLine.length - 1; i >= 0; i --){
    newLine = newLine += readyLine[i];
  }
  return (readyLine === newLine);
}
testPalindrome ('Кекс');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

function extractNumber(convertString){
  convertString = String(convertString);
  let advanceNumber = '';
  for (let i = 0; i < convertString.length; i ++) {
    if (Number.isNaN(convertString[i] * 10) !== true) {
      advanceNumber += convertString[i];
    }
  }
  advanceNumber = advanceNumber.replaceAll(' ', '');
  advanceNumber = parseInt(advanceNumber, 10);
  return advanceNumber;
}
extractNumber('Проведено 8 проверок для 8 вариантов строки');

//Программа "Делу - время"

const START_WORK_DAY = '8:06';
const END_WORK_DAY = '18:15';
const START_MEET = '14:0';
const MEET_LASTING = 90;
// преобразование переменных
const transformTime = (time) => {
  const interim = time.split(':');
  interim[0] = +interim[0];
  interim[1] = interim[1] / 60;
  const resultTime = interim.reduce((result, current) => result + current, 0);

  return resultTime;
};

const startWorkDay = transformTime(START_WORK_DAY);
const endWordDay = transformTime(END_WORK_DAY);
const startMeet = transformTime(START_MEET);
const endMeet = MEET_LASTING / 60 + startMeet;

const during = () => {
  if (startMeet >= startWorkDay && endMeet <= endWordDay) {
    return true;
  }
  return false;
};

during();
// console.log(during());
// const during = (startMeet >= startWorkDay && endMeet <= endWordDay) ? true : false;
// console.log(during());

