// const person: { name: string; age: number } = {     //now defined as object type 
//   name: "sahil Moktan",
//   age: 28,
// };

// console.warn(person.name);


// =================================================================================
//but in above we need to define object type on ever function so;



type ObjType = { name: string; age: number }


const person: ObjType  = {     //now person is defined as object by ObjType: note: can't use keyword object 
  name: "sahil Moktan",
  age: 28,
};

const person2: ObjType  = { 
  name: "safal Tamang",
  age: 23,
};


console.warn(person.name);
console.warn(person2.name);