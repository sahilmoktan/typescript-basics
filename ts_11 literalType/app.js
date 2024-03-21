// literal type is also similar to union type but we only give particular/specific value
function combine(a, b, type) {
    if (type === "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine(2, 5, 'as-number'));
console.warn(combine("sahil", "moktan", "as-string"));
//here in third element type  "as-number" or "as-string" are specific values for type
//this condition/approach  is called literalType 
