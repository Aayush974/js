//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
 
console.log(id===anotherId); // symbol returns a unique vlaue that's guranteed to be unique



 const bigNumber = 3456543576654356754n
 
 console.log(typeof bigNumber) 


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    key:"value",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros)         
console.log(typeof myObj)
console.log(typeof myFunction)//the return dataypes of refrence type  is  set to object the function is give is k/a object function

// https://262.ecma-international.org/5.1/#sec-11.4.3