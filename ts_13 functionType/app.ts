// a fnc return result, that result is a type , the type return by function defines it's own functionType
//eg: fnc return sting value than it's functionType is string


const x=20;
const y="hello"

function add():number{  //this function is number functionType coz return numeric value
    return x
}
//above function can return only x


//we do this so fnc couldn't return wrong type result 
//like if we want our fnc to return boolean value then it shouldn't return number value or string value

//undefine fnc
// if funType is any and if we don't give returning value then it will be undefine value