function createUser(pName, pAge) {
  return {
      name: pName,
      age: pAge,
      print: function() {
          console.log(`Name: ${this.name}  Age: ${this.age}`);
      }
  };
};
const tom = createUser("Tom", 26);
tom.print();
const alice = createUser("Alice", 24);
alice.print();
