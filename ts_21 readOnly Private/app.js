//read only allow us access private properties for reading only
var Users = /** @class */ (function () {
    function Users() {
        this.name = 'sahil';
    }
    return Users;
}());
var u1 = new Users();
// u1.name='safal'  //if name is public then it will also set name safal but it's readonly so can console only
console.warn(u1.name);
//but in private cant access , cant modify outside the class
