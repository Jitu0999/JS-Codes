/*
Q.1 What will the following print in JavaScript. console.log("Jit\"".leigth)
*/
let str = "Jit\""
console.log(str.length)// 4


// .includes() returns true.
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);

/*
Q.2 Explore the includes, startsWith & endsWith function of a string.
*/

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
console.log(str1.startsWith('Sat', 3));
console.log(str1.endsWith('ans'));
console.log(str1.endsWith('ans', 3));

/*
Q.3 Write a program to convert a given string to lower case?
*/

const str2 = 'My Great India.';
console.log(str2.toLowerCase())


