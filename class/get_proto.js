class Person{
  
  constructor(pName, pAge){
      this.name = pName;
      this.age = pAge;
  }
  print(){
      console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
}
const tom = new Person("Tom", 37);
// получаем прототип
console.log(Person.prototype);      // через свойство prototype класса
console.log(tom.__proto__);         // через свойство __proto__ объекта
console.log(Object.getPrototypeOf(tom));  // через функцию Object.getPrototypeOf и объект
console.log(tom.constructor);             // получение функции-конструктора (определения типа) объекта