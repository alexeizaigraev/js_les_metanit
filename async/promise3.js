// несколько промисов с then
const myPromise3000 = new Promise(function(resolve){
  console.log("[myPromise3000] Выполнение асинхронной операции");
  setTimeout(()=>{resolve("[myPromise3000] Привет мир!")}, 3000);
});
const myPromise1000 = new Promise(function(resolve){
  console.log("[myPromise1000] Выполнение асинхронной операции");
  setTimeout(()=>{resolve("[myPromise1000] Привет мир!")}, 1000);
});
const myPromise2000 = new Promise(function(resolve){
  console.log("[myPromise2000] Выполнение асинхронной операции");
  setTimeout(()=>{resolve("[myPromise2000] Привет мир!")}, 2000);
});

myPromise3000.then((value)=>console.log(value));
myPromise1000.then((value)=>console.log(value));
myPromise2000.then((value)=>console.log(value));
