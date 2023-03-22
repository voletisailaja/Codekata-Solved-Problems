var flag=0;
 
var x = (userInput[0]).split(" ");

var N=parseInt(x[0]);

var K=parseInt(x[1]);
 
var y = (userInput[1]).split(" ");

for(var i=0;i<y.length;i++)

{
if(K==parseInt(y[i]))

{

flag=1;

console.log("yes");

break;

}

}

if(flag===0)
{
    
console.log("no");

}
  

