const score=100

const balance=new Number(100)  // creates a number object
//console.log(balance);

//console.log(balance.toString().length)  //converts no. to string and we can use string methods on them

const deciNum=121.2349
//console.log(deciNum.toFixed(3));    // returns approx decimal value upto the specified point

const deciNum2=1393.34   
console.log(deciNum2.toPrecision(2)) /* the number has exponent 3 (is in thousands) hence toPrecision value less than 4 will end 
                                      up in exponent notation */
  //result-1.4e+3(the result is rounded of), e+3 means 10^3   
  
const placeValue=100000000
console.log(placeValue.toLocaleString());  //returns string  with a place value system
console.log(placeValue.toLocaleString('en-IN'))  // returns string with indian place value system