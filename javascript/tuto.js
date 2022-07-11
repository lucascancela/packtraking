const numeros  = [4, 2, 1, 3, , 4, 2];
let duplicados = [];
 
const tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  console.log(tempArray);
  console.log(i);
  console.log(tempArray[i]);

  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
}
 
console.log(duplicados); // [2, 4]