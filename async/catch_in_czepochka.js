// обработка ошибок в цепочке промисов

// если в цепочке промисов на одном из этапов 
// генерируется ошибка (в силу внутренней работы кода,
// например, при генерации ошибки с 
// помощью оператора throw, 
// либо при вызове функции reject()), 
// то все последующие вызовы метода then(), 
// которые содержат только обработку значения, 
//игнорируются, и выполнение цепочки переходит 
// к методу catch().
function generateNumber(str){
  return new Promise((resolve, reject) => {
      const parsed = parseInt(str);
      if (isNaN(parsed)) reject("Not a number");
      else resolve(parsed);
  });
};
function printNumber(str){
  generateNumber(str)
      .then(value => {
          if (value===4) throw "Несчастливое число";
          return value * value;
      })
      .then(finalValue => console.log(`Result: ${finalValue}`))
      .catch(error => console.error(error));
}
printNumber("rty"); // Not a number
printNumber("3");   // Result: 9
printNumber("4");   // Несчастливое число
printNumber("5");   // Result: 25