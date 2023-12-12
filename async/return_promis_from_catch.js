// поскольку catch() возвращает объект Promise, то 
// далее также можно продолжить цепочку:
function generateNumber(str){
  return new Promise((resolve, reject) => {
      const parsed = parseInt(str);
      if (isNaN(parsed)) reject("Not a number");
      else resolve(parsed);
  });
};
function printNumber(str){
  generateNumber(str)
      .then(value => value * value)
      .then(value => console.log(`Result: ${value}`))
      .catch(error => console.error(error))
      .then(() => console.log("Work has been done"));
}
printNumber("3");   
// Result: 9
// Work has been done