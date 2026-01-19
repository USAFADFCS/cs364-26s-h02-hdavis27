/*
 * name: Hannah Davis
 * CS364 - H2
 * Documentation: I used https://regex101.com/ to check my expressions.
 * I also used https://www.w3schools.com/jsref/jsref_regexp_g.asp to learn
 * about the global flag in JS. I needed it so that I could get all
 * matches in an input rather than just the first one then stop. This is needed
 * if my code is run as a JS executable, but I cut it off when entering my expressions
 * into regex101.
 */

//1: match the word "hello"
// gets all occurrences
// this will find the word not if hello is included in another word
const regex01 = /\bhello\b/g;

//2: match phone numbers in the format (123) 456-7890
const regex02 = /\(\d{3}\)\s\d{3}-\d{4}/g;

//3: match valid email addresses
const regex03 = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g;

//4: find all words that start with a capital letter
// excluding words that are all caps
// includes words that start with another capital letter
// or have another cap somewhere in the middle
const regex04 = /\b[A-Z][A-Za-z]*[a-z][A-Za-z]*\b/g;

//5: match strings with any one of these characters: ; [, ], {, }, ^ 
// any number of letters or digits before and after special char
// dont count [] by itself bc that is not a word
const regex05 = /\b[A-Za-z0-9;\[\]\{\}^]*[;\[\]\{\}^][A-Za-z0-9;\[\]\{\}^]*\b/g;

//6: match dates in the format DD/MM/YYYY
const regex06 = /\b(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}\b/g;

//7: find all words that are exactly 4 characters long
// only accepts words with letters (i.e. won't accept a 4 char word with a digit)
const regex07 = /\b[a-zA-Z]{4}\b/g;

//8: to find sequences where any character is repeated three or more times
// (.) matches one character and stores it in a group
// \1  matches what's captured in the first group
const regex08 = /(.)\1{2,}/g;

//9: match URLs starting with http:// or https://
// get stuff after https unless it's a space or comma then stop
// allow special chars and numbers in the URL
const regex09 = /https?:\/\/[^\s,]+/g;

//10: Validate a Password
const regex10 = /\b(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}\b/g;