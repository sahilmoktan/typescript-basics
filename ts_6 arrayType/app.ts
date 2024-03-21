let arr:String[]=["ts","php","js"]       //only for string type value is accepted

let random:[string, number, boolean] = ['abc', 123, true] // only for limited way order is defined:wrong approach

let rrandom:any[]=['abc', 123, true]  //you can define any[] or nothing it itself defines any-type

rrandom.push(123,'hello')

console.log(rrandom)