// here we can define two type for data which is unionType
var data = 10;
//usage
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine(2, 5));
console.warn(combine("sahil", "moktan"));
