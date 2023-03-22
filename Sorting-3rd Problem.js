const d=userInput[0];
const numbers = userInput[1].split(" ").map(Number);

numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers.join(" "));
