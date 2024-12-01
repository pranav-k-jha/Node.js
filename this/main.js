/**

1) In a normal function / function declaration / named function, 
"this" keyword refers to the object that the function is called on. 

2) Arrow functions do not have their own bindings, so when 
"this" is accesses inside an arrow function, it is taken from 
outside. 

3) when "this" keyword is used in a named function/function 
declaration, the "this" keyword is equal to the global object as 
long as the named function is in the global scope and not called 
on any object. 

4) In the global scope the "this" keyword refers to 
module.exports object 

5) In a function expression in the global scope, this keyword 
refers to module.exports object. 
 */

const student = {
  first_name: "John",
  last_name: "Doe",
  getFullName() {
    return this;
  },
};

console.log(student.getFullName());

//============================

const student2 = {
  first_name: "John",
  getName() {
    return this.first_name;
  },
};

const getName = student2.getName;

console.log(student2.getName()); //always check how the function is called

//============================

console.log(this);
module.exports.nickName = "Pranav";
console.log(this);

global.age = 40;
function hi() {
  console.log(this.age);
}
hi();

//============================

const student4 = {
  name: "Jacob",
  siblings: ["Eva", "Diana"],
  showSiblings() {
    this.siblings.forEach(function (siblings) {
      console.log(`${this.name}'s sibling is ${sibling}`);
    });
  },
};

student.showSiblings();

//============================
module.exports.age = 12;
const student5 = {
  name: "Jason",
  siblings: ["Adam", "Smith"],
  showSiblings: () => {
    console.log(this);
  },
};

student5.showSiblings;
