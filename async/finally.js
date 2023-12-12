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
  .finally(() => console.log("End"));
}

//printNumber("3");
//printNumber(33);
printNumber("triuy");
