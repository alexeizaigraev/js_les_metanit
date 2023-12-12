// просто выполняктся 
// без возврата данныз через resolve
const x = 4;
const y = 8;
const myPromise = new Promise(function(){
    console.log("Выполнение асинхронной операции");
    const z = x + y;
    console.log(`Результат операции: ${z}`)
});
myPromise.then();
