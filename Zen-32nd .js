var n=userInput[0];
var value1 = userInput[1].split(" ");


var x=value1.sort(function(a, b){return a - b});
console.log(x.join(" "));
