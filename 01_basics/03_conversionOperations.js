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

//                                         OPERATIONS

// apart from basic operations like +,-,*,**(power),%(returns remainder after division) we gave


//increment and decrement


// increment adds one to its operand and RETURNS value either before or after increment based on where its placed

let x=2
y = x++ /* the increment operation adds one to  x , x becomes 3 BUT the value assigned to y is 2 hence the assignment happens 
         first post that the increment takes place
           this is called postfix */


let a=5
b= ++a  /* here the increment happens first a becomes 6  then that value is assigned to b hence b=6
        this is called prefix */

console.table([y,b])