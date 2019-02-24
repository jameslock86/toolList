//
//fizz buzz


for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


function count(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    let obj = {};
    for (let i = 0; i <str.lenght; i++){
        if (obj[str[i]]){
            obj[str[i]] = obj[str[i]] + 1;
        }else{
            obj[str[i]] = 1;
        }
    }return obj;
}
//with a turanary function-->
function count(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    let obj = {};
    for (let i = 0; i <str.lenght; i++){
      obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1; 

    }return obj;
}
// return the charater that appears the most-->
function count(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    let obj = {};
    for (let i = 0; i <str.lenght; i++){
      obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1; 

    }return obj;
}

//return if the str is a paladrum
// checking to see if the words are spelled the same forwards and backwords
function palindrome(str){
    str.toLowerCase();
    let str2 = str.split('');
    str2.reverse();
    str2 = str2.split('');
    if (str === str2 ){
        return true;
    }else {
        return false;
    }
}

function palindrome(str){
    let str2 = str.split('');
    str.toLowerCase();
    str2.reverse();
    str2 = str2.split('');
    return str === str2;
}
function palindrome(str){

    str.toLowerCase();
    let str2 = str.split('').reverse().join();
    return str === str2;
}
// function to reverses a string
function reverseString(str) {
    return str.split('').reverse().join();
    
}reverseString('cat');

function reverseString(str){
    let revStr = '';
    for (i = str.lenght -1; i >= 0; i ++){
        revStr += str[i];
    }
    return revStr;
} reverseString('cat');


// One of the hot methodologies in the JavaScript 
// world is event delegation, and for good reason.
// Event delegation allows you to avoid adding event
//  listeners to specific nodes; instead, the event 
//  listener is added to one parent. ...The better solution
//   is to add an event listener to the parent UL element


//object.value returns  the objects values in an array form simialr to 
//forIn loop

//returns n lines of pascals triangle 
function PascalsTriangle(n){

}
//takes an array of strings and returns the most common stringin the array;

function gratestNumberOfString(arr){
    let obj = {};
    for (i = 0; i <arr.lenght; i ++ ){
        for (j = i; j < arr.lenght; i ++ ){
            obj[arr[i][j]]
        }
    }

}

// use recursion to log fibonacci sequence of n length
function fibonacci(n){

}



// whiteboard questions about variables and scope-->


(function () {
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// But how can b be defined outside of the scope of the enclosing function?W
// ell, since the statement var a = b = 3; is shorthand for the statements b = 3;
//  and var a = b;, b ends up being a global variable(since it is not preceded by the var keyword) 
//  and is therefore still in scope even outside of the enclosing function.

// Note that, in strict mode(i.e., with use strict), the statement var a = b = 3; will generate 
// a runtime error of ReferenceError: b is not defined, thereby avoiding any headfakes / bugs that 
// might othewise result. (Yet another prime example of why you should use use strict as a matter of
//      course in your code!)

var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2

var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana


// using forEach function
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
// Apple 0
// Banana 1

let color = ['red', 'blue','green'];

color.forEach(function(item, index, array){
    console.log(item);
});
// red, blue, green

let newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

// removes the last item in the array

var last = fruits.pop();
//["Apple", "Banana"];

// removes the first item in the array

var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

// addes a item to the front of the array

var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"

var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function () {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();



let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);


function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// → 0
// → 1
// → 2

var character = {
       name: "Donna",
       hair: "red"
};
​
character.hair = "blonde";
​
character;
// OUTPUT
// {
//        "name": "Donna",
//        "hair": "blonde"
// }

<button id="clicker">So Clickable</button>

document.getElementById("clicker").addEventListener("click", function() {
  alert("you triggered " + this.id);
});




//
// add up the numbers in an array
//

function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b);


}



class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();

// It’s easy to see that the two examples are alike. Just please note that methods in a class do not have a comma between them. Novice developers sometimes forget it and put a comma between class methods, and things don’t work. That’s not a literal object, but a class syntax.

// So, what exactly does class do? We may think that it defines a new language-level entity, but that would be wrong.

// The class User {...} here actually does two things:

// Declares a variable User that references the function named "constructor".
// Puts methods listed in the definition into User.prototype. Here, it includes sayHi and the constructor.





// Write functions that do the following: 
// even // [1,2,3,4,5].even() should return [2,4]
// odd // [1,2,3,4,5].odd() should return [1,3,5]
// under // [1,2,3,4,5].under(4) should return [1,2,3]
// over // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]

// They should also work when used together, for example:

// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]

// And finally the filters should only accept integer values from an array, for example:

// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
Array.prototype.isInt = function() {
    return this.filter(function(n) { return (typeof(n)==='number') && (n% 1 === 0) });
    }
    
    Array.prototype.even = function() {
    return this.isInt().filter(function(n) { return n%2===0 });
    }
    
    Array.prototype.odd = function() {
    return this.isInt().filter(function(n) { return n%2!== 0 });
    }
    
    Array.prototype.under = function(x) {
    return this.isInt().filter(function(n) { return n < x });
    }
    
    Array.prototype.over = function(x) {
    return this.isInt().filter(function(n) { return n > x });
    }
    
    Array.prototype.inRange = function(min, max) {
    return this.isInt().filter(function(n) { return n >= min && n <= max });
    }



    function getTotalByDomain(count){
        let arr = [];

        for (i=0; i<cont.length; i++){
            let dn = count.split(',');
            let x = dn.split('.');
            for (k = 1; k<x.lenght; k++){
                let dn1 = dn[1].split('.',1);
                for(j=0; j<arr.lenght; j++){
                    if(arr[j].domain){
                    arr[j].count +=dn[0];
                    } else {
                        arr.push(dn1[1])
                    };
                }   
            }
        };
    };




    var anagramFunction = function(wordsArr){
        var wordsTable = {};
        
        wordsArr.forEach(function(word){
        var wordKey = word.split('').sort().join('')
        if (wordsTable[wordKey]){
        wordsTable[wordKey].push(word)
        }
        else wordsTable[wordKey] = [word]
        });
        
        var counter = 1;
        var returnStr = '';
        
        for (var key in wordsTable){
        if (wordsTable[key].length > 1){
        returnStr += counter++ + '. ' + wordsTable[key] + '\n';
        }
        }
        
        return returnStr;
        
        }