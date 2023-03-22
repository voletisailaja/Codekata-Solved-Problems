var a=userInput[0].split(" ");
var b=parseFloat(a[0]);
var c=parseFloat(a[1]);
var rem=b%c;
var quo=(b-rem)/c;
var res=quo+" "+rem;
console.log(res);
