//exercise day2.2

//change all the string charcters to uppercase by using it's property
let str = "i am learning javascript"
str.toUpperCase() //the result is "I AM LEARNING JAVASCRIPT"

//change all the string char to lowercase by using property
let str2 = "I AM LEARNING JAVASCRIPT"
str2.toLowerCase//the result is "i am learning javascript"

//cut slice out first word in string using substr() and substring() method
let aStr = "javascript"
aStr.substr(1), aStr.substring(1)//avascript

//sice out the phrase good teacher from murtaza is a good teacher
let phrase = "murtaza is a good teacher"
phrase.substr(13)//good teacher

//check if the string includes word
let bStr = "javascript is a programming language used tomake webpage attractive and beautiful"
bStr.includes("java"),bStr.includes("script"),bStr.includes("language")// all are true

//split a string
let cStr = "reality"
cStr.split("") //["r", "e", "a", "l", "i", "t", "y"]s

//split murtaza is awesome in programming
let reality = "murtaza is awesome in programming"
reality.split(" ")//["murtaza", "is", "awesome", "in", "programming"]

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split this string at commaand change it to an array
let things = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
things.split(",")//["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

//change you will learn javascript into you will learn python
let present = 'you will learn javascript'
present.replaceAll("javascript","python")//"you will learn python"

//what is character at index 5 injavascript
let indexed_char = "javascript"
indexed_char.charAt(5)//"c"

//what is the value of j in numerical in "javascript"
let indexed_code ="javascript"
indexed_code.charCodeAt(0)// 106

//use indexof to find frst occurrance of a in javascript
let first_occurance = "javascript"
first_occurance.indexOf("a")// 1

//use lastindexof to find last occurrance of a in javascript
let last_occurance = "javascript"
last_occurance.lastIndexOf("a")// 3

// Use indexOf to find the position of the first occurrence of the word because in the following
// sentence:'You cannot end a sentence with because because because is a conjunction'
let conjunction = 'You cannot end a sentence with because because because is a conjunction'
conjunction.indexOf('because') //31

//use last lastindexof to find the last occurance of because in sentence:
//'You cannot end a sentence with because because because is a conjunction'
let last_conjuction = 'You cannot end a sentence with because because because is a conjunction'
last_conjuction.lastIndexOf('because')// 47

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' JavaScript '. 
let trim = '                     JavaScript                       '
trim.trim()// "Javascript"

//Use startsWith() method with the string JavaScript is awesome and make the result true
let starting = "Javascript is awesome"
starting.startsWith("Javascript")// true

//Use endsWith() method with the string JavaScript is awesome and make the result true
let ending = "Javascript is awesome"
ending.endsWith("awesome")// true

//Use concat() and merge ' JavaScript is' and 'awesome' to a single string, 'JavaScript is awesome' 
let concate = 'JavaScript is'
let end_of_concate = 'awesome'
concate.concat(end_of_concate)// "Javascript is awesome"

//Use repeat() method to print 30 Days Of JavaScript 2 times
let repeated_print = "30 Days of Javascript"
repeated_print.repeat(2)

// Check if 'on' is found in both python and jargon 
let py = 'python'
let ja = 'jargon'
py.includes('on')// true
ja.includes('on')// true

// I hope this course is not full of jargon. Check if jargon is in the sentence. 
let jar = 'I hope this course is not full of jargon.'
jar.includes('jargon')// true

//Use console.log() and escape characters to print the following pattern.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125 
let pattern = '1 1 1 1 1 /n 2 1 2 4 8 /n 3 1 3 9 27 /n 4 1 4 16 64 /n 5 1 5 25 125'