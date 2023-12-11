'use strict'
// перебор аргументов
function sum(){
  let result = 0;
  for(const n of arguments)
      result += n;
  console.log(result);
}
sum(6);
sum(6, 4)
sum(6, 4, 5) 

console.log('___________')

// rest ...
function sum2(...numbers){
  let result = 0;
  for(const n of numbers)
      result += n;
  console.log(result);
}
sum2(6, 4, 5)
