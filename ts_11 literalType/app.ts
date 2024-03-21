// literal type is also similar to union type but we only give particular/specific value

function combine(  a: number | string,  b: number | string,  type: "as-number" | "as-string") {
  
  if (type === "as-number") {
    return +a + +b;
  } 
  else {
    return a.toString() + b.toString();
  }
}

console.warn(combine(2, 3, 'as-number'));
console.warn(combine("sahil", "moktan", "as-string"));


//here in third element type  "as-number" or "as-string" are specific values for type
//this condition/approach  is called literalType 