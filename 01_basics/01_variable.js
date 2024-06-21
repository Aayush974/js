const accId=134 // const declares a variable which cannot be changed i.e a constant so to speak
let name='xyz' // let values can be changed and reassigned down the line 
var amount=4000  // old method of declaaring a variable causes issues with block scope and functional scope
maturityDate='1/12/23' // variables can also be defined like this tho its a shitty method to do so
let roi; // this is an undefined variable its value can be set later
console.table([accId,name,amount,maturityDate,roi])