const book = {
  title: "Book",
};

const jsonstring = JSON.stringify(book);
console.log(jsonstring);
console.log(typeof jsonstring);

const jsobject = JSON.parse(jsonstring);
console.log(jsobject);
console.log(typeof jsobject);
