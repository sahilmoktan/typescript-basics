// here we can define two type for data which is unionType
let data: number | string = 10;

//usage
function combine(a: number | string, b: number | string) {  //here a and b are able to accept any input type but after this we need to use if else for data manipulation
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
return a.toString() + b.toString()  
}
}

console.warn(combine(2, 5));
console.warn(combine("sahil", "moktan"));


