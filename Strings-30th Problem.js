function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'no';
        }
    }
    return 'yes';
}

// take input
const string =userInput[0].split("").map(String);

// call the function
const value = checkPalindrome(string);

console.log(value);



  //end-here
