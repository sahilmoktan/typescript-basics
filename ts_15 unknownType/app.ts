// unknown is also use if we don't know what data type we are about to receive like any but more suitable

let beta:unknown
beta =20
beta = 'hello'


let item:string

// item =beta   

// unknown says we can use any type in beta but item type is strickenly string
// and if we try to assign item with beta it gives error coz unknown takes any type 
//and if beta gives numeric value to items then there will be conflict


//now beta has both string as well numeric value and we want to assign string values to items then 

if (typeof beta === "string"){
    item=beta
}