function sum(x, y){ return x + y;}
function subtract(x, y){ return x - y;}
function multiply(x, y){ return x * y;}
function zero(){ return 0;}
 
function menu(n){
   
    switch(n){
        case 1: return sum;
        case 2: return subtract;
        case 3: return multiply;
        default: return zero;
    }
     
}
  
let action = menu(1);
console.log(action(5, 4));
  
action = menu(2);
console.log(action(5, 4));
  
action = menu(3);
console.log(action(5, 4));
  
action = menu(190);
console.log(action(5, 4));