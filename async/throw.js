const myPromise = new Promise(function(resolve, reject){
  console.log("Выполнение асинхронной операции");
  const parsed = parseInt("Hello");
  if (isNaN(parsed)) { 
      throw "Not a number";           // Генерируем ошибку
  }
  resolve(parsed);
});
myPromise.catch( function(error){
  console.log(error);
});
