function checker(val) {
  return new Promise((resolve, reject) => {
  if (val > 5) {
  resolve("Ready");
  } else {
  reject(new Error("Oh no"));
  }
  });
 }
 checker(6)
  .then((data) => {console.log(data); })
  .catch((err) => {console.error(err); })
  .finally((data) => {console.error('done'); });
