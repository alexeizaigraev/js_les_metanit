function sum(x, y){ 
  return new Promise(function(resolve){
      const result = x + y;
      resolve(result);
  }).then(function(value){ console.log("Результат операции:", value);});
}
sum(3, 5);
sum(25, 4);