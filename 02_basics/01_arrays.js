const arr=[1,2,3,4,5]
//arr[0] //arrays are zero indexed, this accesses the first elemnt of the array

//array methods


// arr.push(6); // pushes the given argument to the last of the array

// arr.pop();  // removes the last item form the array


// arr.unshift(8); // inserts element at the start of the array

// arr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log( arr.includes(3)); //determines wheter the array contains an element or not and returns corresponding boolean value
// console.log(arr.indexOf(18));//returns the index of the first occurence of the given value,returns -1 if the value is not present in the array

const stringArr = arr.join();
console.log(stringArr); // stringArr is a type string 


// slice and splice methods

const slicedArr=arr.slice(1,3); //returns a copy of a section of an array negative no. can be used to count from the back.The copy includes the starting argument but not the last one
console.log(slicedArr);
console.log(arr);// the original array does not chnage

const splicedArr = arr.splice(1,3);
console.log(splicedArr); // spliced section includes the last index
console.log(arr);  // the splice method changes the original arr



