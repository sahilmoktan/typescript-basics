//ts auto detects what kind of data is provided and declare variable it's type

let num=10          //here 10 is provided to num and num is defined as number type : note: works for let not const

num=8               // here num receives numeric value but not string/boolean value

console.log(num)   // shows new value of 8

// =================================================================================

let data            //now it is type any- below it is given any kind of numbers
data='abc'
data=10
data=false


// =================================================================================


let beta:5      //beta is defined only for 5 
beta=5          // if other value is provided it throws error

const val=8     