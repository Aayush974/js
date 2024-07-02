const arr1 = [2,4,6];
const arr2 = [8,10];

//const mixedArr= arr1.concat('hello');
const mixedArr= arr1.concat(arr2);
// console.log(mixedArr); // concat creates a new array by combining the given argument into the array this can be used to combine 2 arrays as well

// a more efficient way do combine arrays is by using spread method
const efficientArr=[...arr1, ...arr2 ];
// console.log(efficientArr);

const another_arr = ['hi', 'hello', ['aur','thank'], 'you' , ['chalte',['hai','phir']], 'milenge'];
const flatarr = another_arr.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. the argument is the specified depth
// console.log(flatarr);
// console.log(another_arr);// the og arr remains unchanged

console.log(Array.isArray('hi'));
console.log(Array.from(`hi`)); // creates an array
console.log(Array.from({key:'value'})); // returns an empty array we have to specifiy here what we want to make an array out of the key or the values
Array.from();
Array.of();// creates a new array with passed arguments as elements , differs from .from method