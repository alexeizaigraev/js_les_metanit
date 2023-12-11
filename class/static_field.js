class Person{
  static retirementAge = 65;
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
  print(){ 
      console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
  }
}

console.log(Person.retirementAge); // 65
Person.retirementAge = 62;
console.log(Person.retirementAge); // 62
