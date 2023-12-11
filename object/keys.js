const tom = {
  name: "Tom",
  age: 26,
  print(){
      console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};
console.log(Object.keys(tom)); // ["name", "age", "print"]
