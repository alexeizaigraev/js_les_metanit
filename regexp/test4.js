const exp = /(wor)d|k/;    // соответствует либо "word", либо "work"
 
const str1 = "hello world";
const str2 = "hello work";
const str3 = "hello word";
console.log(exp.test(str1));   // false
console.log(exp.test(str2));   // true
console.log(exp.test(str3));   // true
