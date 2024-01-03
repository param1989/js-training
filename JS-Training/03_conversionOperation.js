*
In this tutorial, we shall study about how to convert the data from one type to another
*/
let score = "33" //this is of string type
let isLoggedIn = true //this is of boolean type
console.log(typeof(score)) //checking the type

let valueInNumber = Number(score) //converting the string to number type
let valueInNumber2 = Number(isLoggedIn) //converting the boolean value to number.
/*
this is known as explicit type conversion technique in which the type in which data or a variable
needs to be converted is written on the right hand side along with the variable(enclosed
in parenthesis)
*/
console.log(typeof(valueInNumber)) //lets check the type again.
console.log(valueInNumber) 

console.log(typeof(valueInNumber2))
console.log(valueInNumber2)

/*
33 => number
33aa => NaN => type remains number

*/

let someNumber = 33
let stringNumber = String(someNumber) //number is convertred in to a string.
console.log(typeof(stringNumber))
console.log(stringNumber)

let str1= "Paramjit"
let str2="Singh"
console.log(str1+" "+str2)
/*
addition operator is used in strings, the strings gets combined
*/
console.log("1"+2) //string+number
console.log(1+"2") //number+string
console.log("1"+2+2) //string+number+number
console.log(1+2+"2") //number+number+string

/*
Go through documentation
https://tc39.es/ecma262/multipage/abstract-operations.html

https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
*/
let gameCounter = 100
++gameCounter //Prefix Operator :- value is incremented
console.log(gameCounter);
gameCounter++;
let stopCounter = gameCounter; //here postfix will come in to existance.
console.log(stopCounter);

