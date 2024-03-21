var arr = ["ts", "php", "js"]; //only for string type value is accepted
var random = ['abc', 123, true]; // only for limited way order is defined:wrong approach
var rrandom = ['abc', 123, true]; //you can define any[] or nothing it itself defines any-type
rrandom.push(123, 'hello');
console.log(rrandom);
