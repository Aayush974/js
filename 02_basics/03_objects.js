//object literals
const mySym = Symbol("keyN")
const myObj={
    name:"aayush",
    "surname":"chand",
    age:420,
    [mySym]:"hello"
}//an object stores data in form of key value pairs

// console.log(myObj.name);
// console.log(myObj["name"]); // the vlaues of objects can be accessed by both these ways however for keys like "surname" they can be accessed only via the second mehtod
// console.log(myObj["surname"]);
// console.log(myObj[mySym]); // this value is now treated as a symbol within the object if we did not use the [] in declaring the key then mySym would be a normal key not a symbol
// console.log(myObj);

// myObj.name='xyz';// rewrties the value of name 
// Object.freeze(myObj) ;// prevents any value to be overwritten
// myObj.name='aayush';
// console.log(myObj);
