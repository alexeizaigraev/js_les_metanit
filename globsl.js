// глобальная переменная объявлена внутри функции
// с 'use strict' - даёт ошибку
// и не работает при определении (let) внутри функции
function setAge(){
  userage = 39;
}
setAge();
console.log(userage);
