/*
  PART 1: Cut Into Pieces (in codesandbox browser)
*/

// Make sure the function has a parameter defined
const quarterValue = (number) => {
  // Divide the number stored in the parameter by 4

  // Return the result
  return;
};

// Currently, the returned number is not being stored in a variable. Fix that.
quarterValue(60);

// Whatever variable you defined above, put it in the parenthesis below.
console.log();

/*
  PART 2: If you give a mouse a cookie...
  "giveCookie" is a function that will give a mouse ANY cookie that you pass in as an argument. The "giveCookie" function will add a cookie property to the mouse object defined below and then RETURN that mouse object with the newly added cookie property.
*/
// Our mouse that would like a cookie 🐭🍪
let mouse = {
  name: "Maisey"
};

// 1. What should be passed in to the function?
const giveCookie = () => {
  // 2. What should be on the right side of the equal sign?
  mouse.cookie = "???";
  // 3. This function should return the mouse
  return;
};

// Since giveCookie RETURNS an object, we want to store what the function returns in a variable so we can use it later
// 4. Pass in a cookie (as a string) to the function!
const mouseHasCookie = giveCookie();

// Okay it's later. Let's log that new mouse variable to the console!

/*
  PART 3: What's on my shopping list? 🤔
  1. Define a function called "giveMeShoppingList"
  2. The function should create an object called "shoppingList" with some groceries that you would purchase as its properties.
    EX: some of my properties would be: iceCream, frozenPizza, bacon, eggs, coffee
  3. The values of all of these properties will be booleans. true, if the grocery item needs to be purchased. false if the grocery item does NOT need to be purchased.
  4. The giveMeShoppingList function should return the newly created object.
*/

// 5. Define a new variable called myShoppingList and store what the giveMeShoppingList function returns in it.

// 6. Log to the console myShoppingList!
