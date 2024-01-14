/*
Working with Objects

const object_name = {
    key:value
}
*/
const empDetails = {
    "name":"Harshbir Singh",
    "age":18,
    "email":"harshbir006@gmail.com",
    "isLoggedIn":false,
    "lastLoginDetails":["Monday","Wednesday"]
}
//Accessing the object properties with the help of dot operator...
console.log(empDetails.name);
console.log(empDetails.age);
console.log(empDetails.isLoggedIn);
console.log(empDetails.lastLoginDetails);

/*
if u want to make a function with an object
*/
empDetails.greeting = function()
{
    console.log("Happy Makar Sakranti - 2024");
}
console.log(empDetails.greeting())