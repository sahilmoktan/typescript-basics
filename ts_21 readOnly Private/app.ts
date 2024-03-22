//read only allow us access private properties for reading only

class Users{
    readonly name = 'sahil'
}

const u1 = new Users();
// u1.name='safal'  //if name is public then it will also set name safal but it's readonly so can console only
console.warn(u1.name)


//but in private cant access , cant modify outside the class