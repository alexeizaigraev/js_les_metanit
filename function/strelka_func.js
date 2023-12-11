const hello = ()=> console.log("Hello");
hello();

// в объектб в круглых скобках справа
const user = (userName, userAge) => ({name: userName, age: userAge});
 
let tom = user("Tom", 34);
let bob = user("Bob", 25);
 
console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob.name, bob.age); 

console.log(tom); 