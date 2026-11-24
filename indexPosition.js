let userInput = prompt("Enter a word:");

let reversedWord = "";

for (let characterIndex = userInput.length - 1; characterIndex >= 0; characterIndex--) {
    reversedWord += userInput[characterIndex];
}

if (userInput === reversedWord) {
    console.log("The word is a palindrome.");
} else {
    console.log("The word is not a palindrome.");
}
