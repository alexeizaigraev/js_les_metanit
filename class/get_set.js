class Person{
  #ageValue = 1;
  constructor(name, age){
      this.name = name;
      this.setAge(age);
  }
  getAge(){
      return this.#ageValue;
  }
  setAge(value){ if(value>0 && value < 110) this.#ageValue = value; }
}
const tom = new Person("Tom", 37);
console.log(tom.getAge());  // 37
tom.setAge(-15);
console.log(tom.getAge());  // 37
