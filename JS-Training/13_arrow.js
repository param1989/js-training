const user = {
    usrname:"harsbir singh",
    course:"computer science",
    welcomeMessage:function() //property as a function
    {
            console.log("Welcome to our college")
    }
}
user.welcomeMessage()

const printMessage = () => {
    console.log("Welcome to our college");
}
printMessage()

//parameterized arrow functions
const sum = (a,b) => {
    console.log(a+b)
}
sum(10,20)

