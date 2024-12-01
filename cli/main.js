/* How to receive CLI arguments from a Node.js program? Write a program that gets a cli 
argument called double and a number following it or an argument called modulo
followed by two separate numbers, if the argument is double, then multiply the 
number passed by 2, if the argument is modulo calculate modulo of type numbers passed and show the output

 */

//process.argv[]

const third = process.argv[2];
const fourth = process.argv[3];
const fifth = process.argv[4];
console.log(process.argv[(0, 1, 2)]);

if (third === "double") console.log(fourth * 2);
else if (third === "modulo") console.log(fourth % fifth);
