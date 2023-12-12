// вызывается нигде не определенная функция getSomeWork():
// работает функция обработки ошибок из catch(), которая через параметр error получит информацию о возникшей ошибке, 
//и в консоли браузера мы увидим сообщение об ошибке:
const myPromise = new Promise(function(resolve){
  console.log("Выполнение асинхронной операции");
  getSomeWork();      // вызов не существующей функции
  resolve("Hello world!");
});
myPromise.catch( function(error){
  console.log(error);
});
