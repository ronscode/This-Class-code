//console.log(this === global); // false
console.log("The JS file has loaded");
function solve() { 
  return this;
}

//console.log(solve() === global) // true

let b = "b";
var a = "a";
// console.log(this.b);
// console.log(this.a);

function foo() {
	console.log("Simple function call");
	console.log(this === window);
}
//foo();

let person = {
	firstName: "Peter",
	lastName: "Ivanov",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
	whatIsThis: function () {
		return this; // what is this? It's the person object! 
	},
};

//console.log(person.fullName());
//console.log(person.whatIsThis()); // THIS is whatever object is to the left of the method above (that contains the actual keyword "this" " )

function foo() {
  console.log(this === global);
}
let user = {
  count: 10,
  foo: foo, // scopes to line 37
  bar: function () { 
    console.log(this === global); 
    }
}
//user.foo() // false 
let func = user.bar; 
//func() // true 
//user.bar() // false

//let myButton = document.getElementById("thisEvents");

// myButton.addEventListener("click", function(e) {
//   console.log(this === e.currentTarget); // Always true })
// });

class Person {
  constructor(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;
    this.displayName = function () {
      console.log(`Name: ${this.first_name} ${this.last_name}`); 
      } 
  }
};

let person2 = new Person("John", "Doe"); 

//person2.displayName(); // John Doe

function outer() {
  console.log(this); // Object {name: "Peter"}
  function inner() {
    console.log(this); // Window 
  }
  function cat() {
    console.log("Ron's cat is awesome")
  }
  inner(); 
}
//console.log(outer())
const obj = { 
  name: 'Peter', 
  func: outer // The "this" of the function outer is attached to this object with the name obj
}; 

//obj.func();

function outer() {
  const inner = () => console.log(this); 
  inner();
  }

const obj2 = {
    name: 'Peter',
    func: outer
  };

//  obj2.func(); // Object {name: "Peter"}

  const x = 42;
const getX = function () {
  return this.x;
}
const module2 = {x , getX };
const unboundGetX = module2.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module2)
;
console.log(boundGetX()); // 42