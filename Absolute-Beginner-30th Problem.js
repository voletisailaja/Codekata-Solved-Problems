let x=userInput[0].split(" ").map(Number);

let z=parseFloat(x[0]);
let s=parseFloat(x[1]);
let t=parseFloat(x[2]);
let o=z+" "+s+" "+t;
let res=(-s+Math.sqrt(s*s-4*z*t))/(2*z);
let res1=res.toFixed(2);
let res2=(-s-Math.sqrt(s*s-4*z*t))/(2*z);
let res3=res2.toFixed(2);
//let res2=(-s-Math.sqrt(disc)/2*z);
//console.log(res1);
console.log(res1);
console.log(res3);
