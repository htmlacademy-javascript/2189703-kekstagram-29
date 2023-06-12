// Функция для проверки длины строки.
//let string;
//let maxString;
// Первый вариан с объявлением функции
function checkStringLength (string, maxString) {
  console.log('Проверяемая строка меньше максимально возможной ' + maxString + ' - ' + (string.length <= maxString));
}
checkStringLength ('проверяемая строка', 20);
checkStringLength ('проверяемая строка', 18);
checkStringLength ('проверяемая строка', 10);

// Второй вариант с анонимной (стрелочной) функцией и объявлением третьей переменной.
const testStringLength = (string, maxString) => {
  console.log('Проверяемая строка меньше максимально возможной ' + maxString + ' - ' + (string.length <= maxString));
};
testStringLength ('второй вариант проверки', 40);
testStringLength ('второй вариант проверки', 30);
testStringLength ('второй вариант проверки', 20);

// Функция для проверки, является ли строка палиндромом.
function testPalindrome (line) {
  let readyLine = line.replaceAll(' ', '');
  readyLine = readyLine.toLowerCase();
  let newLine = '';
  for (let i = readyLine.length - 1; i >= 0; i --){
    newLine = newLine += readyLine[i];
  }
  console.log(line + ' - это палиндром - ' + (readyLine === newLine));
}

testPalindrome ('брАк');
testPalindrome ('топот');
testPalindrome ('ДовОд');
testPalindrome ('Кекс');
testPalindrome ('А роза упала на лапу Азора');
testPalindrome ('Лёша на полке клопа нашёл ');

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
  console.log('Функция extractNumber из выражения "' + convertString + '" извлекает число: ' + advanceNumber);
}

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
extractNumber(2023);
extractNumber(-1);
extractNumber(-1.5);
