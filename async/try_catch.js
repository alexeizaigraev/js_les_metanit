const myPromise = new Promise(function(resolve, reject){
  try{
      console.log("Выполнение асинхронной операции");
      getSomeWork();      // вызов не существующей функции
      resolve("Hello world!");
  }
  catch(err){
      reject(`Произошла ошибка: ${err.message}`);
  }
});
myPromise.catch( function(error){
  console.log(error);
});
