const tom = {
  name: "Tom",
  age: 26,
  print(){
      console.log(`Name: ${this.name}  Age: ${this.age}`);
  }
};

for(const prop of Object.entries(tom)) {
  console.log(prop);
}