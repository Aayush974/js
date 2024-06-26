// ways to write a string: can be written in either "" or '' pr using backticks `` known as templates string

// backticks make code more readable variables can be used directly using placeholders for them

const name="user"
//console.log(`this is a greeting from the ${name}`)

// another way to declare a string is using-

const gameName= new String('mario') // the string() constructor creates string like objects 
/*When String() is called as a function (without new), it returns value coerced to a string primitive. discussed in 03_conversion
When String() is called as a constructor (with new), it coerces value to a string primitive and returns a  String object, which is not a primitive. */

console.log(gameName[1])   // we can acess the characters of a string by treating it as an array like object
console.log(name[1])       
