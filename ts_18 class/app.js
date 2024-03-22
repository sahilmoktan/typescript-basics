//class is a user-defined type for a object
//can be called data structure of user
// a set of particular group
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " id Added");
    };
    Users.prototype.removeUser = function (user) {
        console.log("".concat(user, " removed"));
    };
    return Users;
}());
var User1 = new Users;
var result = User1.addUser("Sahil");
console.log(result);
User1.removeUser('peter');
