const tom = { name: "Tom", age: 37};
const bob = Object.assign({}, tom);
bob.name = "Bob";
bob.age = 41;
         
console.log(`Объект tom. Name: ${tom.name}   Age: ${tom.age}`);
console.log(`Объект bob. Name: ${bob.name}   Age: ${bob.age}`);