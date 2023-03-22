var a=userInput[0];
var b=userInput[1].split("");
var c=b.join(" ");
var ans=b[0];

for(var i=0;i<b.length;i++){
ans=(ans|b[i]);
}
console.log(ans);
