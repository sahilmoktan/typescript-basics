//A group of constant
//that can assign a number to your string and make an easy comparison
//enum role {values}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANGER"] = 1] = "MANGER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
console.log(Role);
//don't have to assign admin as 0, it auto define their serial number
