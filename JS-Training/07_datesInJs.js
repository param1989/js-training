/*
We shall learn about dates here
*/
let mydate = new Date() //making an object of Date Class
console.log(mydate)
console.log(typeof(mydate)) //object
console.log(mydate.toString())
//converts the date into string format..
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

let myCreatedDate1 = new Date(2024,0,9) //yyyy,m,dd
let myCreatedDate2 = new Date(2024,0,9,7,27)
//Apply Custom Date Format..
let myCreatedDate3 = new Date("2024-01-09")
let myCreatedDate4 = new Date("09-01-2024")
console.log(myCreatedDate1);
console.log(myCreatedDate2);
console.log(myCreatedDate3)
console.log(myCreatedDate4)

let myTimeStamp = Date.now() //Timestamp
console.log(myTimeStamp)
console.log(myCreatedDate1.getTime())
console.log(myCreatedDate1.getDay())
console.log(myCreatedDate1.getMonth()+1)
console.log(myCreatedDate1.getFullYear())

myCreatedDate1.toLocaleString('default',
{
    weekday:"long" //attribute:property
}
)

 




