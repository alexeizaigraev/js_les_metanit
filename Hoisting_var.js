console.log(foo);   // undefined
var foo = "Tom";

//в отличие от var-переменных 
//константам и let-переменным при хостинге 
//не присваивается начальное значение

display();
 
function display(){
    console.log("Hello Hoisting");
}

// если функция присвоена переменной - ошибка!
// display();

//От этой ситуации следует отличать момент, когда 
// let-переменная объявлена, но не инициализирована
// let foo;            // по умолчанию foo = undefined
// console.log(foo);   // undefined
// foo = "Tom";
// console.log(foo);   // Tom
 
// var display = function (){
//     console.log("Hello Hoisting");
// }

