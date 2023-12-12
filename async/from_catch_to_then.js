// можем из функции-обработчика ошибки в catch() 
// также можем передавать некоторое значение 
// и получать через последующий метод then():
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
      .catch(error => {
          console.log(error);
          return 0;
      })
      .then(value => console.log("Status code:", value));
}
printNumber("ert3");    // Not a number
                      // Status code: 0
