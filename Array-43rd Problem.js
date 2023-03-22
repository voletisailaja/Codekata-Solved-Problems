var a=userInput[0].split(" ");
var b=a.join(" ");
var c=userInput[1].split(" ").map(Number);
c.sort(function(a,b){
    return a-b;
})
var x=c.join(" ");
var e=userInput[2].split(" ").map(Number);


e.sort(function(a, b){return b-a});
var y=e.join(" ");
var z=x+" "+y;
console.log(z);

