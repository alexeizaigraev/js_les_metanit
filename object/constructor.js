// определение конструктора объектов типа Person
function Person(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.print = function(){
      console.log(`Name: ${this.name}  Age: ${this.age}`);
  };
}
// определение объекта типа Person
const tom = new Person("Tom", 39);
// обращение к свойству объекта
console.log(tom.name); // Том
// обращение к методу объекта
tom.print();    // Name: Tom  Age: 39