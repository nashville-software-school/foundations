/*
  PART 1: Doctor's Office Schedule (in codesandbox browser
*/

const makeSchedule = () => {
  // DO NOT MODIFY THIS DATA. Look below for where to write your code.
  const patientsArray = [
    {
      firstName: "MaryBeth",
      lastName: "Rodriguez",
      appointment: "8:45"
    },
    {
      firstName: "Chase",
      lastName: "Freely",
      appointment: "9:15"
    },
    {
      firstName: "Calvin",
      lastName: "Murray",
      appointment: "10:55"
    },
    {
      firstName: "Lorena",
      lastName: "Smith",
      appointment: "2:20"
    }
  ];

  // This is the variable you will append to with +=
  // You don't need to change this
  let schedule = "";

  // Write your for..of loop here ! 😊

  return schedule;
};

const output = makeSchedule();
console.log(output);

/*
  PART 2: 99¢ Candy Store
  There's a wonderful new Candy Store down the road and EVERYTHING in the store is .99 cents each! Let's create a list of some of the candies that this store has available.
  1. Store an array in a variable called "candy"
  2. In the candy array, create 3-5 objects with properties that represent a candy:
    - a name property that holds a string
    - a type property that holds a string (like "gum", "chocolate", "lollipop", etc.)
  3. BUT WAIT! This is the 99¢ Candy Store, so we'll need to write a for..of loop that adds the "price" property to each candy object (The value should be .99)
*/

// 4. After adding the price property to each candy object, inside of the SAME for..of loop: Print each candy to the console. Ex: "The Dubble Bubble Gum is 99 cents!"
