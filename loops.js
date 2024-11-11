// For loop

// for (let i = 1; i <= 10; i++) {
//     const element = i * 6;
//     if (element===6) {
//         console.log("Table of 6");
//     }
//     console.log(element);   
// }

// // Nested Loops

// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop value: ${i} `);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} `);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }    
// }

// With Array

// let  myArray = ["Developer", "UI/UX", "SEO", "SMM"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element); 
// }

// break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

// for (let i = 0; i <= 7; i++) {
//     if (i==5) {
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${i}`);
// }

// With Object

// const myObj = {
//     user1: {
//         username: "Muhammad",
//         email: "mudassirshahid84@gmail.com"
//     },
//     user2: {
//         username: "Muhammad Mudassir",
//         email: "mudassirshahid83@gmail.com"
//     }
// };

// // Obtain an array of user objects
// const usersArray = Object.values(myObj);

// // Loop through each user object
// for (let i = 0; i < usersArray.length; i++) {
//     const user = usersArray[i];
//     // Print the email of the current user
//     console.log(user.email);
// }

// While Loop

// let i = 0  //Initialization
// while (i <=10) {
//     console.log(`Value of index is ${i}`);
//     // i = i + 2
//     // i++
// }

// With Array

// let  myArray = ["Developer", "UI/UX", "SEO", "SMM"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// Do While 

// let score = 17 //no error and print this value like score is 17 this is the work of do while loop

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// Using map practice 
// const mapArr = arr.map(num => num * 2)
// console.log(mapArr);

// The below loops are array specific loops 
// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num * 2);
// }

// const greetings = "Hey Bro!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

// const map = new Map()
// map.set("PAK", "Pakistan")
// map.set("USA", "United States of America")
// map.set("PAK", "Pakistan") // this is not print because map has unique value and this value already exist so it's not unique

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// // output
// [ 'PAK', 'Pakistan' ]
// [ 'USA', 'United States of America' ]

// for (const [key, value] of map) {    //this syntax called array destructor
//     console.log(key, ':', value);
// }
// output
// PAK : Pakistan
// USA : United States of America

// With Object

// const myObject = {
//     'game1': 'GTA',
//     'game2' : 'Cricket'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// } //for of not work with object


// For in Loop

// const myObject = {
//      JS: 'JavaScript',
//      cpp : 'C++',
//      rb : 'Ruby'
// }

// for (const key in myObject) {
//    console.log(`${key} shortcut of ${myObject[key]}`);
// }

// Array with for in loop
// const arr = ["JS", "C++", "Python", "TS", "Next JS"]

// for (const key in arr) {
// //    console.log(`${key} ${arr}`);
//    console.log(arr[key]);
// }


// forEech use with array mostly

// const coding = ["JS", "C++", "Python", "TS", "Next JS"]

// // coding.forEach( function (val) {
// // console.log(val);
// // })
//forEach contain callback function and callback function has no name and in parameter add like val/item etc and store all values in it.

// Using arrow function
// coding.forEach( (item) => {
//     console.log(item);
//     })

// Function with forEach

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// forEach has multiple parameters not only item like item, index, arraylist

// function printMe(item, index, arr) {
//     console.log(item, index, arr);
// }

// coding.forEach(printMe)

// const myCoding = [
//     {
//         languageName: "java",
//         languageFile: "java"
//     },
//     {
//         languageName: "javascript",
//         languageFile: "js"
//     },
//     {
//         languageName: "python",
//         languageFile: "py"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })

// const coding = ["JS", "C++", "Python", "TS", "Next JS"]

// const values = coding.forEach( function (item) {
// console.log(item);
// return item  //foreach don't return any value //undefined
// })

// console.log(values);

// map filter reduce
//filter

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter take callback function and return values
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// Second way with block scope {} and in block scope we need to add return kewword otherwise empty array return
// const newNums = myNums.filter( (num) =>  {
//     return num > 4
// })
// console.log(newNums);

// Using forEach for work like filter example

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) =>  {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// Back to filter Important Example

// const books = [
//     { title: 'Book 1', genre: 'Fiction', publish: 2003, edition: 2013 },
//     { title: 'Book 2', genre: 'Non-Fiction', publish: 2002, edition: 2012 },
//     { title: 'Book 3', genre: 'History', publish: 2003, edition: 2013 },
//     { title: 'Book 4', genre: 'Science', publish: 2004, edition: 2014 },
//     { title: 'Book 5', genre: 'History', publish: 2005, edition: 2015 },
//     { title: 'Book 6', genre: 'Fiction', publish: 2006, edition: 2016 },
//     { title: 'Book 7', genre: 'Non-Fiction', publish: 2007, edition: 2017 },
//     { title: 'Book 8', genre: 'History', publish: 2008, edition: 2018 },
//     { title: 'Book 9', genre: 'Science', publish: 2009, edition: 2019 },
// ]

// let userBooks = books.filter( (bk) => bk.genre === 'History' )
// userBooks = books.filter( (bk) => {
//     return bk.publish >= 2006 && bk.genre === 'History'
// } )
// console.log(userBooks);

// map and it is also callback function

// const myNums = [1, 2, 3, 4, 5]
// // const newNums = myNums.map( (num) => {
// //     return num + 2
// // })
// console.log(newNums);


//Chaining

// const myNums = [1, 2, 3, 4, 5]
// const newNums = myNums
//                .map( (num) => num * 2)
//                .map( (num) => num + 1 )
//                .filter( (num) => num >= 5 )
// console.log(newNums);

// reduce most usefull espacially when used shooping cart and it is also callback function
// syntax .reduce( (accumulator, currentValue) => accumulator, + currentValue, initialValue )
// Always give to initial value to accumulator and it could be anything like 0 1 2 3 4 etc

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc : ${acc} and  currval : ${currval}`);  // to see value of every iteration
//     return acc + currval
// }, 0)

//Short way

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )
// console.log(myTotal);

// But First one code is readable and second one is shorthand and smart way it's upto you which one you prefer

const shoopingCart = [
    {
        itemName: "JS course",
        price: 5999
    },
    {
        itemName: "React course",
        price: 12999
    },
    {
        itemName: "Next course",
        price: 16999
    },
    {
        itemName: "MERN course",
        price: 22999
    },
    {
        itemName: "MERN course",
        price: 1004
    },
]

const priceToPay = shoopingCart.reduce( (acc, item) => acc + item.price, 0  )
console.log(priceToPay);