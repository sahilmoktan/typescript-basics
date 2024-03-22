class CreateAccount{
    makeEmail(user){
        return `${user}@test.com`
    }
}

class Users extends CreateAccount{
    addUser(user){
        return `${user} added`
    }
    deleteUser(){}
}

const U1 = new Users()
console.log(U1.addUser("sahil moktan"))
console.log(U1.makeEmail("sahil moktan"))   
//if it was not extended then it wont allow us to access makeEmail coz U1 creates in Users

class Employees extends CreateAccount{
    addEmployee(emp){
        return `${emp} as employee added`
    }
}



const E1 = new Employees()
console.log(E1.addEmployee('sam'))
console.log(E1.makeEmail('sam'))
//if not extended createAccount then it wont allow us to access makeEmail for sam coz E1 creates in Employees

//here we are able to use makeEmail function of CreateAccount class because extend makes CreateAccount parent class and other Extent user as child class and we are able to use a class in multi class as a class component