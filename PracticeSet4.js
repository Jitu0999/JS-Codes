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