// Функция для проверки длины строки.
// Первый вариант объявления функции
function checkStringLength (string, maxString) {
  return string.length <= maxString;
}
checkStringLength ('проверяемая строка', 20);
//let test1 = checkStringLength ('проверяемая строка', 20);
//console.log('Проверяемая строка меньше максимально возможной ' + test1);

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
/*Проверка палиндрома!
line = 'топот';
console.log(line + ' - это палиндром - ' + testPalindrome (line));
line = 'А роза упала на лапу Азора';
console.log(line + ' - это палиндром - ' + testPalindrome (line));

console.log(testPalindrome ('ДовОд'));
line = 'брАк';
console.log(line + ' - это палиндром - ' + testPalindrome (line));*/


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
//console.log(extractNumber('Проведено 8 проверок для 8 вариантов строки'));
/* Проверка функции извлечения целого числа из строки
convertString = '2023 год';
console.log(extractNumber(convertString));

convertString = 'ECMAScript 2022';
console.log(extractNumber(convertString));

convertString = '1 кефир, 0.5 батона';
console.log(extractNumber(convertString));

convertString = 'агент 007';
console.log(extractNumber(convertString));

convertString = 'а я томат';
console.log(extractNumber(convertString));

convertString = 2023;
console.log(extractNumber(convertString));

convertString = -1;
console.log(extractNumber(convertString));

convertString = -1.5;
console.log(extractNumber(convertString));
*/
