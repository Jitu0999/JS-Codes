let name = 'Jitu'
let friend = "Ajay"
console.log(friend)
console.log(name.length)
console.log(name[0])
console.log(name[1])

// Template literals
let boy1 = 'Pramod'
let boy2 = 'Nikhil'
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape sequence characters.
let fruit = 'Bana\'na'
console.log(fruit)
//let fruit = "Bana\"na"
//console.log(fruit.length)

// ***** Methods *****

let name1 = 'Ajay GGGGGGGGGGGGG'
//console.log(name1.length)
//console.log(name1.toUpperCase())
//console.log(name1.toLowerCase())
//console.log(name1.slice(2, 4))
//console.log(name1.slice(2))
//console.log(name1.replace('Aj', 'Lk'))
//let friend1 = 'Ritu'
//console.log(name1.concat(' is a friend of ', friend, ' Ok'))
//let friend2 = '      Meena     '
//console.log(friend2)
//console.log(friend2.trim())
let friend3 = 'Dinesh'
let friend4 = 'Ramesh ' + 'Naresh'
console.log(friend3[0])
console.log(friend3[1])
console.log(friend3[2])
console.log(friend4)

// Use a for loop to print a string?
// using normal for loop.
let str1 = 'Delhi ';
for(i=0; i<str1.length; i++){
    console.log(str1[i])
}

// use of for in.
let str = 'India';
for (let i in str){
    console.log(str[i])
}
