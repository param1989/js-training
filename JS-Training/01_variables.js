"use-strict" //it will follow the latest javscript standards...

const accountId = 144553
let accountEmail = "param1989@gmail.com"
//var accountPassword = "123456" //wrong practice
//accountCity = "Ludhiana" //wrong practice
let accountPassword = "123456"  //Right Practice
let accountCity = "Ludhiana"
let accountState;

//accountId = 23  this will not be changed.
console.log(accountId); //it will print the value on the screen in javascript.
accountEmail = "param1989@hotmail.com"
accountPassword = "9876543"
accountCity = "Mohali"

console.table([accountEmail,accountPassword,accountCity,accountState]);
/*
We are using console.table to print multiple values at once
*/

/* 
We are not using var because with the use of var in javascript, it leads to inconsistency
when same variable is used in multiple files.

Prefer not to use var because of issue in block scope and function scope
*/
