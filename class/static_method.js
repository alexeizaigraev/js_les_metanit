class Person{
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
  print(){ 
      console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
  }
  static printClassInfo(){ 
      console.log("Класс Person представляет человека");
  }
}
Person.printClassInfo();  
