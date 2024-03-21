//core types of Typescript
//Number, String, Boolean
var num = 10; //num is defined as number and must provide numeric value 
var str = '10'; //srt is defined as string and must provide string value
var pp = false; //pp is defined as boolean and must provide true or false
//note : if we provide wrong value it gives instant error as well while compilation it throws error
//==========================================================================
function add(n1, n2) {
    return n1 + n2;
}
var result = add(10, 20); // here we get 30 coz both are num : no argument
// let result = add(10, "20")             // here we get 1020 coz if front is string then string+num gets string
console.log(result);
//==========================================================================
function subtract(n1, n2) {
    return n1 - n2;
}
var output = subtract(80, 30);
console.log(output);
