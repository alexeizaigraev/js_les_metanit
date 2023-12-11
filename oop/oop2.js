const user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(this.name);
    console.log(this.age);
};
 
// вызов метода
user.display();
