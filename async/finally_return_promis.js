// Метод finally() возвращает объект Promise, поэтому 
//после него можно продолжить продолжить цепочку:
function generateNumber(str){
  return new Promise((resolve, reject) => {
      const parsed = parseInt(str);
      if (isNaN(parsed)) reject("Not a number");
      else resolve(parsed);
  });
};
function printNumber(str){
  generateNumber(str)
  .then(value => console.log(value))
  .catch(error => console.log(error))
  .finally(() => console.log("Выполнение промиса завершено"))
  .then(() => console.log("Промис все еще работает"));
}
printNumber("3");
