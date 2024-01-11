const myArr = [0,1,2,3,4,5] //number array - initialisation
const studentNames = ["Ram","Sham"]
console.table([myArr,studentNames])

const myArr2 = new Array(1,2,3,4)
//Array Methods
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop() //deleting an element from last
console.log(myArr)
myArr.unshift(9) //placing the element at top.
console.log(myArr)
myArr.shift()//deleting an element from the top of an array..
console.log(myArr)
console.log(myArr.includes(9)) //check whether an element exists in an array or not.
console.log(myArr.indexOf(3)) //location of element is 3.
const mySlice = myArr.slice(0,5) //it will slice the elements from 0 to 4
console.log(mySlice)
const mySplice = myArr.splice(0,5) //it will delete the elements from 0 to 4
console.log(mySplice)
console.log(`After splicing the array ${myArr}`) //Tild sign 

let score1 = 100
let score2 = 200
let score3 = 300
//const scoreArray = new Array(score1,score2,score3)
console.log(Array.of(score1,score2,score3))

console.log(Array.isArray("Paramjit Singh")) //it will whther it is an array or not.
console.log(Array.from("Paramjit Singh")) //it will generate an array from the value
//console.log(Array.from({name:"Harhbir Singh"}))

const allArr = myArr.concat(myArr2)
console.log(allArr)


    

/*
The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy. Unlike the slice() method, the splice() method will change the contents of the original array
*/

