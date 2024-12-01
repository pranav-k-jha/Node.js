const student2 = {
  first_name: "John",
  getName() {
    return this.first_name;
  },
};

const getName2 = student2.getName;
// getName = getName.bind(student2);
console.log(student2.getName2());
