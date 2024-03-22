//access modifiers are available in all object oriented programming language :ts, c++, java, php
//access modifiers class ko fnc & properties lai accessability define garxa
//that we can access the fnc, inside or outside of the class ,or child class can access it
//Public fnc can be access anywhere in/out : this is by default
//private fnc can be access only inside of class
//if protected just in child class
var Users = /** @class */ (function () {
    function Users() {
        this.name = " "; //here we have set name as private properties
    }
    Users.prototype.setName = function (name) {
        this.name = name;
        this.getNameLength();
    };
    Users.prototype.displayName = function () {
        console.log(this.name);
    };
    Users.prototype.getNameLength = function () {
        console.log(this.name.length);
    };
    return Users;
}());
var u1 = new Users;
u1.setName('Sahil');
// u1.name="moktan"  //here if name was not private then we could mistakenly change name to moktan
u1.displayName();
// u1.getNameLength()   //this call works only if geNameLength is public
