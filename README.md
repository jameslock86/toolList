# toolList
things I can do

#Q1.Define ES6 and mention the new features of ES6?
es6 is the rules and policies that Javascript follows that govern policies. 

1. Arrow functions--  Fat arrow functions allow you to shorten your code and function lenght but they remove the abiliity to use `this` in code. The way around is to use `strict mode`  and use it as an object method
`function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the Person object
  }, 1000);
}

var p = new Person();`

2. They introduced Let as a way to add variables.

the `let` statement declares a block scope local variable, optionally initializing it to a value.

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}