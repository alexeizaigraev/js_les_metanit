//для каждой копии замыкания определяется своя копия лексического окружения

// определяем объект-пространство имен
function outer(){
  let x = 5;
  function inner(){
      x++;
      console.log(x);
  };
  return inner;
}
const fn1 = outer();
const fn2 = outer();
fn1();  // 6
fn1();  // 7
fn2();  // 6
fn2();  // 7
