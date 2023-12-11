function outer(){
  let x = 5;
  function inner(){
      x++;
      console.log(x);
  };
  return inner;
}
const fn = outer(); // fn = inner, так как функция outer возвращает функцию inner
// вызываем внутреннюю функцию inner
fn();   // 6
fn();   // 7
fn();   // 8
