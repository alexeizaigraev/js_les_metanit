// проверить длину пароля - что она не менее 8 символов:
const exp = /......../;    // регулярное выражение - 8 символов
 
const password1 = "1234567890";
const password2 = "qwery5";
// проверяем первый пароль
console.log(exp.test(password1));   // true -  password1 соответствует выражению exp
// проверяем второй пароль
console.log(exp.test(password2));   // false -  password2 не соответствует выражению exp