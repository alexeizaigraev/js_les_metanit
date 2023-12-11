const say = x => console.log(x)

const initialText = "hello world!";     // строка для поиска
const exp = /hello/;    // регулярное выражение
const result = exp.test(initialText);   // проверяем наличие в строке выражения exp
console.log(result); // true
   
const initialText2 = "Hi all";
const result2 = exp.test(initialText2);
console.log(result2); // false - в строке "Hi all" нет "hello"