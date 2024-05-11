// function addTwoNumbers(number1, number2) {
// console.log(number1 + number2);
// }
// // addTwoNumbers(3, 4)
// // addTwoNumbers(3, "4")
// // addTwoNumbers("3", 4)
// // addTwoNumbers("a", 4)

// const result = addTwoNumbers(3,6)
// console.log("Result : " ,result); //Undefined


// Return Statement
// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
//     }

    
//     const result = addTwoNumbers(3,6)
//     console.log("Result : " ,result); //9 because of return

// function loginUser (username) {
//     return `${username} just logged in`
// }

// loginUser("Mudassir")
// console.log(loginUser("Mudassir")); //for print

// With condition 

// function loginUser (username) {
//     // if (username === undefined) {
//     //     console.log("Please enter username");
//     //     return
//     // }
//     // Professional code
//     if (!username) {
//         console.log("Please enter username");
//         return
//     }
//     // Above both method equivalent same
//     return `${username} just logged in`
// }

// loginUser("Mudassir")
// console.log(loginUser()); //for print

// Shopping add to cart example with rest operator for passing multiple values

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(1000, 3000, 4000, 9000)); // add only first value

// With Rest operator
// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(1000, 3000, 4000, 9000)); // add all values in array

// With extra parameter and Rest operator
// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }
// console.log(calculateCartPrice(1000, 3000, 4000, 9000)); //first value in val1 second in val2 and rest values will be add in array

// Handle Object

// const user = {
//     username: "Mudassir",
//     price: 999
// }

// function handleObject(anyobject) {
//   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "Muhammad",
//     price: 899
// })  //pass direct obj too as argument 

// Handle Array

// const newArray = [200, 300, 600, 800, 1000]

// function returnSecondValue(getArray) {
//   return getArray[1]
// }
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([200, 300, 600, 800, 1000])); //Both ways correct


// Global and Local Scope

// var a = 10
// let b = 20
// const c = 30

// console.log(a);
// console.log(b);
// console.log(c);
//everything fine now use this in scope {} to see usecase

// var a = 40 //Global scope and value can ovverride everwhere
// let b = 300 
// const c = 90 

// if (true) {
//   var a = 10 //value change above global 40 into 10
//   let b = 20 //value can't change because of let is block scope
//   console.log("INNER : ", a );
//   const c = 30 // const will be constant
// } //Block scope

// // console.log(a); // 10
// console.log("OUTER : ", b);
// // console.log(c);

// // var a = 50
// // console.log(a); //50 That's why we dont use var 


// Nested Scope & Scope level and mini hoisting
// Nested or inner function can access parent function values but nested(child) function can't
// Child function can access Parent function can be called closure 

// function one() {
//   const username = "Mudassir"

//   function two() {
//     const website = "Youtube"
//     console.log(username);
//   }
//   // console.log(website); //error

//   two()
// }

// one()

// In Nested Conditions

// if (true) {
//   const username = "Mudassir"
//   if (username === "Mudassir") {
//     const website = "Youtube"
//     console.log(`${username} or ${website} `);
//   }
//   // console.log(website); //error
// }

// console.log(username); //error


// Interesting Question Example

// console.log(addOne(4)); //no error
// function addOne(num) {
//   return num + 1
// }

// console.log(addOne(4)); 

//Expression or store func in variable
//We cannot access func before declaration and this method can be called hoisting
// console.log(addTwo(5));  // error
// const addTwo = function(num) {
//   return num + 2
// }

// console.log(addTwo(5)); //no error because func access after declaration


// This and Arrow Function
// this = refer current context
// in node environment this = refer empty {}
// this value in browser = window
// this can use in object maybe not in function

// const user = {
//   username: "Mudassir",
//   price: "999",

//   welcomeMessage: function() {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   }
// }

// user.welcomeMessage()
// user.username = "Shahid"
// user.welcomeMessage()
// console.log(this); // refers empty {}

// function thisValueFunc() {
//   console.log(this); // all details about function
//   let username = "Mudassir"
//   console.log(this.username); //cannot access this in func
// }
// thisValueFunc() // all details about function

// With Expression method

// const thisExpression =  function () {
//   let username = "Mudassir"
//   console.log(this.username); //cannot access this in func
// }
// thisExpression() // undefined

// // Arrow Function
// // Same thing in arrow function

// const thisArrowExpression = () => {
//   let username = "Mudassir"
//   console.log(this.username); //cannot access this in func
// }
// thisExpression() // undefined

// Pure Arrow Function
// syntax () => {}

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }
// console.log(addTwo(3,4));

// Another way to use is Implicit return for one line statement 
// Explicit means you need to add return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) //second way
// console.log(addTwo(3,4));

// Arrow func For object

// const addTwo = (num1, num2) => ({username: "Mudassir"}) 
// console.log(addTwo()); // { username: 'Mudassir' }

// Immediately Invoked Function Expressions (IIFE)
// Named IIFE
(function IIFE() {
    console.log("DB CONNECTED");
})();  // This semicolon add must to stop IIFE Function so could run another IIFE Function below


// Using Arrow Function 
// Unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Mudassir") 

