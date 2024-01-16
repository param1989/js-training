a = 300
if(true)
{ //scopes means with in the curly braces..
    let a=10
    console.log(`INNER = ${a}`)
}


function one()
{
    const usrname = "harshbir singh"

    function two()
    {
        const website = "youtube.com"
        console.log(usrname)
    }
    //error statement console.log(website)
    two()

    
}
one()

