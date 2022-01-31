
// //CHALLENGE 1 (if/else).......................................................    CHALLENGE 1  ....................
console.log ("CHALLENGE 1 ----- (use if/else to create valid password)");

let password = "opennope";

if (password.length <= 7) {
console.log ("password is too short");
}
else {
console.log (`New password is "${password}"`);
    }


// //CHALLENGE 2 (use both if/else)...............................................    CHALLENGE 2  ....................
console.log ("CHALLENGE 2 ----- (Use if/else to see if divisible by 3 or 5)");

let num = 2

if (num % (3 || 5) ==0) {
console.log (`The number ${num} is divisible by 3 or 5`);
}
    else
console.log (`The number ${num} is Not divisible by 3 or 5`);


// // //CHALLENGE 3 (GodDamn FizzBuzz game).........................................    CHALLENGE 3  ....................  
console.log ("CHALLENGE 3 ----- (Output the FizzBuzz game)");

let num2 = 8

if ((num2 % 3 ==0) && (num2 % 5 == 0)) {
    console.log ("FizzBuzz");
    }
else if (num2 % 5 == 0) {
    console.log ("Buzz");
    }
else if (num2 % 3 == 0) {
    console.log ("Fizz");
    }
else {
    console.log ("FizzBuzz number", num2);
}


// // //CHALLENGE 4 (Palindrome checker)...............................................   CHALLENGE 4  ....................  
console.log ("CHALLENGE 4 ----- (Check num for palindrome)");

let num3 = 32101423;

let numStr = num3.toString() 

let numReverse = numStr.split("").reverse().join("");

if (numStr === numReverse) {
    console.log(num3, "is a palindrome");
} 
else {
    console.log(num3, " is not a palindrome");
}


// // //CHALLENGE 5 (use IF to make Time of day log) ...................................    CHALLENGE 5  .................... 
console.log ("CHALLENGE 5 ----- (use IF to make a time of day log)");

let today = new Date();
let time = today.getHours()+""+today.getMinutes();
let placeOfWork = "Droylsden";
let townOfHome = "Audenshaw";

// console.log (today);
// console.log (time);

if (time >= 0930 && time <= 1730) {
    console.log ("I am at ", placeOfWork)
}
else if (time >= 0900 && time <= 0929) {
    console.log ("commuting to", placeOfWork)
}
else {
    console.log (`The time is ${time}, I am at home in ${townOfHome}`)
}


// //CHALLENGE 6 (last vowel's index from input string) .................................    CHALLENGE 6  ....................
console.log ("CHALLENGE 6 ----- (find last vowels index from a string)");  

// //   ... Keeps returning '84' or '-1', should be index 94.
// //   -involves array and finding index [position] of the character      

// let lastVowel = (input.lastIndexOf(vowels));
// let lastVowel = (input.lastIndexOf(`${vowels}`));
// let lastVowel = (input.lastIndexOf("a"&&"e"&&"i"&&"o"&&"u");

// //   C6 try looping over the vowel array and store the largest index of the current item in the array
// //   a simple old-fashioned for loop - async-friendly
// let input = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = ["a","e","i","o","u"];
// let lastVowel;
//     for (let i = 0; i < input.length; i++) { //means If i less than 93 go up 1
//         if       }
// console.log(lastVowel);

let input = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let indA = (input.lastIndexOf("a"));
let indE = (input.lastIndexOf("e"));
let indI = (input.lastIndexOf("i"));
let indO = (input.lastIndexOf("o"));
let indU = (input.lastIndexOf("u"));

let indexNo = [indA,indE,indI,indO,indU];
console.log(`The index of the last charater is ${Math.max(...indexNo)}`);

// let indexNo = indA;
//     if (indexNo<indE) {indexNo=indA;}
//     if (indexNo<indI) {indexNo=indA;}
//     if (indexNo<indO) {indexNo=indA;}
//     if (indexNo<indU) {indexNo=indA;}


// console.log(indA);
// console.log(indE);
// console.log(indI);
// console.log(indO);
// console.log(indU);


// let lastVowel = (input.lastIndexOf(vowels));
// console.log(lastVowel);
// for (let i = 0; index < theArray.length; ++index) {
//     const element = theArray[index];

// console.log (lastVowela[""]);
// console.log(`${lastVowel}`);


// //CHALLENGE 7 (check if first & last letters match in a string)......................    CHALLENGE 7  ....................  
console.log ("CHALLENGE 7 ----- (check if first & last letters match)");

let word = "randomiser";

if (word[0] === word[9]) {
    console.log (`First and last letters match in the word "${word}" is TRUE`);
}
else {
    console.log (`First and last letters match in the word "${word}" is FALSE`);
}


// //CHALLENGE 8 (Return if Even, Multiply if odd)......................................    CHALLENGE 8  ....................  
console.log ("CHALLENGE 8 ----- (Return number if Even, Multiply if odd)");

let num8 = Math.floor((Math.random() * 10))
let num9 = Math.floor((Math.random() * 10))
let result = num8 + num9;

if (result % 2 == 0){
    console.log(num8, "+", num9, "=", result, "this is an EVEN outcome");
} else {
    console.log(`${num8} + ${num9} is an ODD number, multiplied they equal ${num8 * num9}`);
}
