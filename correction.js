//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"//
const story= "The quick brown fox jumps over the lazy dog"
const newStory = story.toLowerCase();
console.log(newStory)
let newSplit = newStory.split("the")
console.log(newSplit)
console.log(newStory.length)
console.log(newSplit.length -1)

let brown = story.split("brown")
console.log(brown)
console.log(brown.length -1)
//count how many times the following string appears in the string variable:1."love" variable2:"o"
const sentence ="I love Amuor Mangar";
const sentence2 = sentence.toLowerCase();
console.log(sentence2)
let sentence3 = sentence2.split("love");
console.log(sentence3)
console.log(sentence2.length)
console.log(sentence3.length -1)

let sentence4 = sentence2.split("o")
console.log(sentence4);
console.log(sentence4.length-1)

//count how many times the following string appears in the string variable:1."code" variable2:"d"
const h = "I know how to code"
let h1 = h.toLowerCase()
console.log(h1);
let h2 = h1.split("")
console.log(h2.length);
let h3 = h1.split("code");
console.log(h3);
console.log(h3.length-1);
//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
let string1 = "The pupils are reading in the library";
console.log(string1.includes("are"));
let string2 = "The child was sitting on the table before it fell";
console.log(string2.includes("sitting"));

//Extract the last four characters from the string below;"extravaganza"
let d ="extravanza"
let lastfour = d.slice(-4)
console.log(lastfour);

//1. Write a program that removes all vowels from a string.

function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
let inputString = "Hello World";
let result = removeVowels(inputString);
console.log(result);

function removeVowels(str){
 return str.replace(/[aeiouAEIOU]/g,"")
}
let b = "I love Amuor";
let c = removeVowels(b);
console.log(c);

function removeVowels(str){
 return   str.replace(/[aeiouAEIOU]/g,"")
}
let m = "what is your name?"
let n = removeVowels(m);
console.log(n)




