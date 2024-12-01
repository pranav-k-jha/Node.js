let dog = {
  name: "chicko",
  bark() {
    return `${this.name} says woof woof`;
  },
};

const bark1 = dog.bark1;
// func = func.bind(dog);

// setTimeout(dog.bark, 1000);
console.log(dog.bark1());
