function Person(name, age){
  this.name = name;
  this.age = age;
}
const people = [
  new Person("Tom", 38), new Person("Kate", 31), 
  new Person("Bob", 42), new Person("Alice", 34), 
  new Person("Sam", 25)
];


const isAgeMoreThan33 = (p)=>p.age > 33;
const getPersonName = (p)=>p.name;
const printPersonName = (p)=>console.log(p);
 // получаем из Person строку с именем
const view = people
                .filter(isAgeMoreThan33)
                .map(getPersonName)
                .forEach(printPersonName);