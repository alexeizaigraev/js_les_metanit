// функция - конструктор объектов
function mkPerson(pName, pAge) {
  ob = {
    name: pName,
    age: pAge,
    print: function() 
    {console.log(`Name: ${this.name}  Age: ${this.age}`);}
  }
  return ob;
  };

const inna = mkPerson('inna', 33);
inna.print()
