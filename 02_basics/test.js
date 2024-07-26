//the following is an example of how to create an object with a particular prototype via object.create() which creates an object with a prtotype we wish
// let protoRabbit = {
//     speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//     }
//   };
//   let blackRabbit = Object.create(protoRabbit);
//   blackRabbit.type = "black";
//   blackRabbit.speak("I am fear and darkness");


// the following function is an example of a constructor function which creates an object and the objects's protype is defined within the function and its property as well. Before class keyword such function were used to create classes. Any  function can be used as a constructor function due to this all non-arrow functions have an empty object as their prototype property due to this empty object all objects created thru constructor functions have access to Object.prototype as well (their direct protoype is still Function.protoype since they were created thru a function)


//   function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
//   }
//  makeRabbit("white")


//this is an example of using class keyword to create classes , it has the constructor function inside it and speak property we have defined. the constructor function is called by the 'new' keyword as shown below which creates a fresh instance of this class the objects created by this still have the same prototype story told above

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
console.log(Object.getPrototypeOf(killerRabbit))
