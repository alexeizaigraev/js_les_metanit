// Hello -> += World -> += from METANIT.COM
new Promise(resolve => resolve("Hello"))
.then(value => value + " World")
.then(value => value + " from METANIT.COM")
.then(finalValue => console.log(finalValue));