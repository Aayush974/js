let score="33abc"

let valueInNumber=Number(score) // converts the value of score to number now score's value will be treated like a no.
//console.log(typeof (valueInNumber))
//console.log(valueInNumber) // gives NaN(not a no.), NaN is stil treated as a no. in js

// if instead of 33abc we use some boolean value like true it line 5 wil log out 1 and 0 if false
// if null is use line 5 will give 0
// undefined gives NaN

let isAlive=1
let booleanConfirm= Boolean(isAlive)
//console.log(booleanConfirm)

/* null
undefined
""
0
NaN   are falsy values all else values are truthy values */

let notString=undefined
let convertString=String(notString) //to convert it is important to use capital letter in String
//console.log(convertString)

let value=null
//console.log(-value)