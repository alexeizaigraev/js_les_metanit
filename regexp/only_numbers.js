// у нас есть 4-х символьные pin-коды
// проверить, что pin-код содержит только цифры:

const exp = /[0-9][0-9][0-9][0-9]/;    // соответствует четырем цифрам подряд
 
const code1 = "1234";
const code2 = "jav5";
const code3 = "3452";
console.log(exp.test(code1));   // true
console.log(exp.test(code2));   // false
console.log(exp.test(code3));   // true
