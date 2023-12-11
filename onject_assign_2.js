// копирование нескольких объектов

const tom = { name: "Tom"};
const sam = { age: 37};
const person = { height: 170};
Object.assign(person, tom, sam);    // копируем из tom и sam в person
console.log(person);    // {height: 170, name: "Tom", age: 37}