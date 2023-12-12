function sum(x, y){ 
  return new Promise(function(resolve){
      const result = x + y;
      resolve(result);
  })
}
sum(3, 5).then(function(value){ console.log("Результат операции:", value);});
sum(25, 4).then(function(value){ console.log("Сумма чисел:", value);});
