var a=userInput[0].split(" ").filter(Number).map(Number).reduce((ac,curr)=>ac*curr,1);

var res1=parseFloat(a/100).toFixed(2);
console.log(res1);
