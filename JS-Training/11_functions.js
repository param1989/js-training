function  sayHello()
{
    console.log("Hello")
}
sayHello()
function addNumber(number1,number2)
{
    let result = number1+number2
    return result
}
console.log(addNumber(10,20))

function logInUserName(username="harshbir")
{
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    else
   {
    return `${username} is loggedIn`
   } 
    
}
console.log(logInUserName("Paramjit Singh"));

function  calculateStockPrices(...valn)
{
return valn;
}
console.log(calculateStockPrices(200,400,600,800,1000));

const myNewArray = [200,300,400,600,700,800]
function returnArray(getArray)
{
    return getArray[1]
}
console.log(returnArray(myNewArray));

//handleobject
function handleobject(anyObject)
{
    console.log(anyObject)
}
//passing an anonymous object at function call...
handleobject(
    //passing an object 
    {
        username:"harshbir singh",
        course:"btech"
    }
)


