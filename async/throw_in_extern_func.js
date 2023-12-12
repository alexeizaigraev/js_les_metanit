// исключение генерируется во внешней 
// функции-обработчике
// и передаётся в промис
function getNumber(str){
  const parsed = parseInt(str);
  if (isNaN(parsed)) throw "Not a number";            // Генерируем ошибку
  else return parsed;
}
const myPromise = new Promise(function(resolve){
  console.log("Выполнение асинхронной операции");
  const result = getNumber("hello");
  resolve(result);
});
myPromise.catch( function(error){
  console.log(error);
});
