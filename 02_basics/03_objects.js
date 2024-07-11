//object literals

const myObj={
    name:"aayush",
    "surname":"chand",
    age:420,
}//an object stores data in form of key value pairs

console.log(myObj.name);
console.log(myObj["name"]); // the vlaues of objects can be accessed by both these ways however for keys like "surname" they can be accessed only via the second mehtod
console.log(myObj["surname"]);