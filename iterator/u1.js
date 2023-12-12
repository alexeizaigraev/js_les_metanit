// Любой итерируемый объект (например, массив, Map, Set и т.д.) хранит в свойстве Symbol.iterator функцию, 
// которая возвращает связанный с объектом итератор:
const people = ["Tom", "Bob", "Sam"];
// получаем итератор массива
const iterator = people[Symbol.iterator]();
console.log(iterator);  // Array Iterator {}

// у массивов есть метод entries(), 
// который также возвращает итератор массива:
console.log(people.entries()); // Array Iterator {}

const iter = people[Symbol.iterator]();
// console.log(iter.next());    // {value: "Tom", done: false}
// console.log(iter.next());    // {value: "Bob", done: false}
// console.log(iter.next());    // {value: "Sam", done: false}
// console.log(iter.next());    // {value: undefined, done: true}

while( !(item = iter.next()).done ){
  console.log(item.value);
}