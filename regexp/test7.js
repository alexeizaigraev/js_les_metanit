// комбинации
const exp = /[дт]о[нм]/;    // соответствует строкам "дом", "том", "дон", "тон"
 
const str1 = "дома";
const str2 = "сома";
const str3 = "тона";
console.log(exp.test(str1));   // true
console.log(exp.test(str2));   // false
console.log(exp.test(str3));   // true