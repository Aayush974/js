// comparison btw similar datatypes gives expected values like
//  console.log(2>3) gives false
//  console.log(3 !=4) gives true etc

// comparison btw diff datatypes gets tricky

console.log(null>0) // due to comparison being used js converts null to number i.e 0 hence result will be false
console.log(null==0) // == is an equality check and behaves diff from comparison (ref to mdn) hence the result will be false
console.log(null>=0) // >= is also a comparison and converts null to 0 hence result will be true

