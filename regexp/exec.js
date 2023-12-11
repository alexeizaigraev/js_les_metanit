const initialText = "hello world!";     // строка для поиска
const exp = /hello/;    // регулярное выражение
const result = exp.exec(initialText);   // проверяем наличие в строке выражения exp
console.log(result); // ['hello', index: 0, input: 'hello world!', groups: undefined]
   
const initialText2 = "Hi all";
const result2 = exp.exec(initialText2);
console.log(result2); // null - в строке "Hi all" нет "hello"