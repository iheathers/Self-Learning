const array = [1, 2, 3];

//~# ARRAY has a number of HIGHER ORDER METHODS
array.forEach((element) => console.log(element));
console.log(
  "some even",
  array.some((element) => element % 2 == 0)
);
console.log(
  "every even",
  array.every((element) => element % 2 == 0)
);

console.log(array.reduce((total, value) => total + value));

const accounts = [
  {
    name: "name 1",
    age: 12,
  },
  {
    name: "name 2",
    age: 13,
  },
  {
    name: "name 3",
    age: 14,
  },
];

console.log(accounts.find((account) => account.age == 12));
console.log(accounts.filter((account) => account.age > 12));

//~! AVOID SWITCH CASES IN OOP
//~! AVOID IF ELSE / FOR LOOP CASES IN FUNCTIONAL PROGRAMMING
