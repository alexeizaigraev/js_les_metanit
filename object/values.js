const tom = {
  name: "Tom",
  age: 26,
  print(){
      console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};
console.log(Object.values(tom)); // ["Tom", 26, print()]
