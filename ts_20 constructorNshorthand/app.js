"use strict";
// constructor works like a fix frame where data can be receive and record as per frame set
//old approach
// class Users{
//     name=""
//     age=0
//     email=""
//     constructor(name, age, email){
//         this.name=name
//         this.age=age
//         this.email=email
//     }
//     displayVal(){
//         console.log(this.name, this.age, this.email)
//     }
// }
// const u1= new Users( 'safal',25, "safal@gmail")
// const u2= new Users('yogesh',23,'yogesh@gmail')
// u1.displayVal()
// u2.displayVal()
//ts approach
class Users {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayVal() {
        console.log(this.name, this.age, this.email);
    }
}
const u1 = new Users('safal', 25, "safal@gmail");
const u2 = new Users('yogeshhh', 23, 'yogesh@gmail');
u1.displayVal();
u2.displayVal();
