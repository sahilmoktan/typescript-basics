//core types of Typescript
//Number, String, Boolean

const num:number = 10  //num is defined as number and must provide numeric value 
const str:String = '10' //srt is defined as string and must provide string value
const pp:boolean = false //pp is defined as boolean and must provide true or false


//note : if we provide wrong value it gives instant error as well while compilation it throws error


//==========================================================================

function add (n1,n2)
{
    return n1+n2
}

let result = add(10, 20)                  // here we get 30 coz both are num : no argument
// let result = add(10, "20")             // here we get 1020 coz if front is string then string+num gets string

console.log(result)



//==========================================================================
function subtract (n1:number,n2:number)        // here we have defined n1&n2 as must be provided numeric value
{
    return n1-n2
}

let output = subtract(80,30)
console.log(output)