// отрицание, не содержит
const exp = /[^a-z]/;    // соответствует любым символам, кроме символов из диапазона a-z
 
const code1 = "zorro";
const code2 = "zorro5";
const code3 = "34521";
console.log(exp.test(code1));   // false
console.log(exp.test(code2));   // true
console.log(exp.test(code3));   // true
