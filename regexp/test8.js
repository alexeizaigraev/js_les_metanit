// код имеет только 4 цифры
const exp = /\d\d\d\d/;    // соответствует четырем цифрам подряд
 
const code1 = "1234";
const code2 = "jav5";
const code3 = "3452";
console.log(exp.test(code1));   // true
console.log(exp.test(code2));   // false
console.log(exp.test(code3));   // true
