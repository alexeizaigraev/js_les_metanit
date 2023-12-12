function myFun(val = 6) {
  return new Promise((resolve, reject) => {
  if (val > 5) {
  resolve("Ready");
  } else {
  reject(new Error("Oh no"));
  }
  });
 }
 
 myFun(6).then(
  function(val) { console.log(val); },
  function(err) { console.log(err); }
 );
