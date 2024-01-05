const score = 500
/*console.log(score)
console.log(typeof(score));
console.log(typeof(400))
*/
const balance  = new Number(100)
console.log(typeof(balance)) //object

//converting this object of Number type to String Type
console.log(balance.toString())
console.log(typeof(balance.toString())) //string not an object 
console.log(balance.toString().length)
let usdPrice= 82.3681 //.3681 is a fractional part
console.log(usdPrice.toFixed(2)) //82.37
console.log(1.23e+5)
console.log(1.23e+5.toFixed(2)) 
console.log(usdPrice.toPrecision(4)) 
/*Mathematical Functions */
console.log(Math)
console.log(Math.abs(-4)) //returns an absolute value
console.log(Math.round(4.6)) //returns a round off value
console.log(Math.ceil(4.2))//returns a ceil value
/*
The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
*/
console.log(Math.floor(4.9))
/*
The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
*/
console.log(Math.min(4,3,6,8)) //returns a minimum value
console.log(Math.max(4,3,6,8)) //returns a maximum value

console.log(Math.random()) //it generates a random number
//console.log(Math.round(Math.random()*6)) //it will generate up to 0 to six
//console.log(Math.floor(Math.random()*6)+1)//it will generate the dice from 1 to 6
console.log(Math.ceil(Math.random()*6)) //it will generate the dice from 1 to 6





