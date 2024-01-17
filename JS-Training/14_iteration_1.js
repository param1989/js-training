/*
Iterations
*/
for(let i=0;i<=10;i++)
{
    const element = i;
    if(element==5)
    {
        console.log("5 is my number");
    }
    console.log(element);
}
for(let i=1;i<=10;i++)
{
    console.log(`Outer Loop value ${i}`);

    for(let j=1;j<=10;j++)
    {
        console.log(`Inner loop ${j}`);
    }
}
let myArray = ["mango","banana","orange","litchi"]
for(index=0;index<myArray.length;index++)
{
    const element = myArray[index];
}

for(let index=1;index<=20;index++)
{
    if(index==5)
    {
        console.log(index);
        break;
    }
}
for(let index=1;index<=20;index++)
{
    if(index==5)
    { 
        console.log(index);
        continue;
    }
}
