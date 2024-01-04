/*
Today In this tutorial we shall learn about strings.
String is an object consists of collection of characters
*/
const studentName="Harshbir Singh"
const age = 19

//console.log(studentName + " "+ age);
/*
This is an old way of combining strings, we shall not be using this in today javascript.
We shall follow the new way of doing things..
*/
console.log(`Hello my name is ${studentName} and age is ${age}`);

const gameName = new String("Football");
/*
Here gameName is an object of a String class and new will allocate the memory to an object named
gameName at run time
*/
console.log(gameName);
/*
All the inbuilt functions of a string exists under prototype. These  functions can be accessed
directly or u can make use of __proto__ which is an empty object of string type which again
access all the inbuilt functions of a string.
*/
console.log(gameName.__proto__);
/*
it will return an object
*/
console.log(gameName.toUpperCase())
/* 
when u are using all the inbuilt functions with string name, it wil not affect the original value
because of stack implementation.
*/
console.log(gameName); //original value is not get affected.
console.log(gameName.length); //length oif the string
console.log(gameName.toLowerCase()); //lowercase
console.log(gameName.substring(0,4)); //it will print the characters from 0 to 3
console.log(gameName.slice(-8,4));
//it will print starting from last location till 4
const playerOne = "  Ronaldo   "
console.log(playerOne.trim()) //it will remove from left and right hand side of a string.
const playerTwo = "Lionel-Messi"
console.log(playerTwo.split("-"))
//it will split the string via - character
console.log(playerTwo.replace("-"," "))
console.log(playerTwo.includes("Messi"))
//it will check whether a particular string is a part of playerTwo or not

/*
go thorugh this documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
