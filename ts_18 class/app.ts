//class is a user-defined type for a object
//can be called data structure of user
// a set of particular group

class Users{
    name:" "
    email:" "

    addUser(user)
    {
        return `${user} id Added`
    }

    removeUser(user)
    {
        console.log(`${user} removed`)
    }

}

let User1 = new Users


let result =User1.addUser("Sahil")

console.log(result)

User1.removeUser('peter')