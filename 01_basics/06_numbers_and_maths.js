const score=100

const balance=new Number(100)  // creates a number object
//console.log(balance);

//console.log(balance.toString().length)  //converts no. to string and we can use string methods on them

const deciNum=121.2349
//console.log(deciNum.toFixed(3));    // returns approx decimal value upto the specified point

const deciNum2=1393.34   
 /*console.log(deciNum2.toPrecision(2))    the number has exponent 3 (is in thousands) hence toPrecision value less than 4 will 
                                        end  up in exponent notation */
                                     
  //result-1.4e+3(the result is rounded of), e+3 means 10^3   
  
const placeValue=100000000
//console.log(placeValue.toLocaleString());  //returns string  with a place value system
//console.log(placeValue.toLocaleString('en-IN'))  // returns string with indian place value system
//etc

//number properties
//console.log(Number.MAX_VALUE)
//console.log(Number.MIN_SAFE_INTEGER)  //etc


// ++++++++++++++++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++

console.log(Math.ceil(2.1))  //Returns the smallest integer greater than or equal to the input.
console.log(Math.floor(4.6)); //Returns the largest integer less than or equal to the input.
console.log(Math.sin(0.5));  // returns sine of the no.
console.log(Math.random());  // returns a pseudo random no. betweeb 0 and 1 ( 0 is inclusive and 1 is exclusive i.e range=[0,1) )

// the random method is often used together with floor method to get whole no.

console.log(Math.floor(Math.random()*6)+1)//multiplying with 6 multiplies the staring and end point of the range increasing the range to [0,6) adding one makes the range [1,6]
