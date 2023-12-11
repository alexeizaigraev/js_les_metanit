arr = []
const arrSize = 5
for(let i = 0; i < arrSize; i++) {
  let vec = []
  for(let j = 0; j < arrSize; j++) {
    vec.push(i * 10 + j)
  } 
  arr.push(vec)
}

for(let i = 0; i < arrSize; i++) {
  console.log('____')
  for(let j = 0; j < arrSize; j++) {
    console.log(`${i}-${j}: ${arr[i][j]}`)
  }
}
