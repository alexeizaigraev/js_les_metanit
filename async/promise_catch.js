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
      .catch(error => console.log(error)); 
}
printNumber("rty"); // Not a number
printNumber("3");   // 3
