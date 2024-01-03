//Primitive types are the inbuilt types given in the javascript itself.
// 7 types:- String,Number ,Boolean,undefined,null,Symbol,BigInt

/*
All the primitive types are represented using stack in a memory and they will
use the concept of call by value
*/

/*
Is javascript is a Statically Typed Language or Dynamically Typed Language?
What is DOM? (Document Object Model)
*/


const score = 100 //number
const scoreValue = 100.3 //decimal type 
let isLoggedIn = false //boolean type
let isLoggedOut = isLoggedIn 
/*
u have assign the value of is LoggedIn to isLoggedOut
copy of isLoggedIn is inserted into is LoggedOut
any change in isLoggedOut will not affect isLoggedIn
*/
isLoggedOut = true
console.log(isLoggedOut)
console.log(isLoggedIn) //it doesn't change

const outsideTemp =null //empty value

const id = Symbol('123') //it uniquely identifies the id
const anotherId = Symbol('123')

console.log(typeof(id)) //type is symbol
console.log(id==anotherId) //false they are uniquely identified by node.js engine at run time

const bigNumber = 345652398445515555564411n; //it identifies this is a bigInt(Big Integer) by typing n at the end.
console.log(typeof(bigNumber))
console.log(bigNumber)
//it is generally big scientific calculations

/*
Reference Types:- Array , Objects, Functions :- they are represented in Heap Memory
*/
const fruits = ["apple", "mango","orange","bannana","blueberry"] //array representation
let student1 = {
    name:"Harshbir singh",
    age:19,
    email:"harsbir@gmail.com",
    upi: "harshbir0234@ybl"
}
let student2 = student1 
/*
student2 stores the reference of student1 object (reference means address)
any change in student2 will reflect the student1
*/
console.log(student1)
student2.upi = "harsbir1001@sbi"
/*
this will effect the value of upi of student1 also
*/
console.log(student1)
const myFunction = Function() //function is declared in javascript
{
    console.log("Hello World")
}
//myFunction is an object of Function
console.log(typeof(student1))
console.log(typeof(fruits))
console.log(typeof(myFunction))





