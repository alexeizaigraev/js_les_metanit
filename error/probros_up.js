// проброс ошибки вверх по стеку вызова функций:
class Database{
  constructor(){
      this.data = ["Tom", "Sam", "Bob"];
  }
  getItem(index){ 
      if(index > 0 && index < this.data.length)
          return this.data[index];
      else
          throw new RangeError("Invalid index");
  }
  open(){
      console.log("Database has opened");
  }
  close(){
      console.log("Database has closed");
  }
}
function get(index) {
 
  const db = new Database();
  db.open();
  try {
      return db.getItem(index);
  } catch(err) {
      console.error(err);
      throw new Error(err.message);   // снова генерируем ту же ошибку
  }
  finally{
      db.close();
  }
}
function printResult(){
  try{
      const item = get(5);
      console.log("Got from database:",item);
  }
  catch(err){
      console.log(err);   // обрабатываем ошибку из функции get
  }
}
printResult();