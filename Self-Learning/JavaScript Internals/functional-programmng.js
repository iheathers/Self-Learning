function add(a, b) {
  if (new.target) throw Error("Do not use new with compute function.");
  //~# new.target is a pseudo property added at runtime

  return a + b;
}

// console.log(add(2, 3));
// const newAdd = new add(2, 3);

function Employee(a, b) {
  this.a = a;
  this.b = b;

  if (!new.target) throw Error("Use new with Employee.");
}

const employee1 = Employee(1, 2);

//~! Evolution of programming paradigm

//! Machine Learning and Assembly Language
//! Structure language
//! Procedural language
//! OOP
//! FP

//~% CORE PRINCIPLES OF FUNCTIONAL PROGRAMMING

//% 1. Immutability and pure function - PURE AND IDEMPOTENT

var sum = 0;
function idempotent_but_side_effect(value) {
  //! IDEMPOTENT BUT HAS SIDE EFFECTS
  sum += value;
  return value * value;
}

var sum = 0;
function not_idempotent_and_side_effect(value) {
  //! NOT IDEMPOTENT AND ALSO HAS SIDE EFFECTS
  sum += value;
  return sum + value;
}

function sqr(x) {
  //~^ PURE AND HAS NO SIDE EFFECTS
  return x * x;
}

//% 2. Higher Order Function -
//* A function which takes another function as parameter
//* A function which returns another function

//% 3. Lambda Expressions
var square = (x) => x * x;

function function_declaration(x) {
  //* FUNCTION DECLARATION
  return x;
}

var function_expression = (x) => {
  //* FUNCTION EXPRESSION
  return x;
};

//~* convert normal function to arrow function

var sq = function (x) {
  //! remove  ^      ^ add => here
  //!         |      |
  return x * x;
};

var sq = (x) => x * x;
