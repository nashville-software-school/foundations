/* PART 1: Paint The House (in browser portion of codesandbox) */

// Here's where the function is defined
const paintTheHouse = (color) => {
  return `I painted the house with ${color} paint`;
};

// Here is where the function is invoked
const messageFromMinion = paintTheHouse();

console.log(messageFromMinion);

/*
  PART 2: What's missing?

  1. This function should log a nice greeting to anybody! In order for that to happen, we'll need a 'name' parameter. Go ahead and put it in there!
*/

const sayHello = () => {
  console.log(`Hello there, ${name}`);
};

// 2. Pass in a string that has a name in it to make the console say hello! (Do it a few more times with different names!)
console.log("SAY HELLO:");

/*
  PART 3: Making Ramen Orders 🍜

  Define a function called orderRamen.

  orderRamen should take in 3 parameters:
  - protein
  - vegetable
  - broth

  orderRamen should RETURN the final ramen order!
  EX: "I would like my ramen with tofu, green onions, and in chicken broth 😋"
*/

// Now call (or invoke) orderRamen a few times with different arguments and print each order to the console!
