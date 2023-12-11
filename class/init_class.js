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
tom.print();    // Name: Tom  Age: 37
const bob = new Person("Bob", 41); 
bob.print()     // Name: Bob  Age: 41
