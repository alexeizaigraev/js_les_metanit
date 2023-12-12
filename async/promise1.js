const myPromise3000 = new Promise(function(){
  console.log("[myPromise3000] Выполнение асинхронной операции");
  setTimeout(()=>console.log("[myPromise3000] Завершение асинхронной операции"), 3000);
});
const myPromise1000 = new Promise(function(){
  console.log("[myPromise1000] Выполнение асинхронной операции");
  setTimeout(()=>console.log("[myPromise1000] Завершение асинхронной операции"), 1000);
});
const myPromise2000 = new Promise(function(){
  console.log("[myPromise2000] Выполнение асинхронной операции");
  setTimeout(()=>console.log("[myPromise2000] Завершение асинхронной операции"), 2000);
});
