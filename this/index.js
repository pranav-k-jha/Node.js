console.log(this);
module.exports.nickName = "Pranav";
console.log(this);

global.age = 40;
function hi() {
  console.log(this.age);
}
hi();


