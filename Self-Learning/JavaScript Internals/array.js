const array = [1, 2, 3];

//~# SUBSCRIPTS

array[3] = 4;
console.log("array[4]", array);

array[4] = 5;
console.log("array[5]", array);

//~# LINKED LISTS/STACK - FILO OR LIFO
array.push(6);
console.log("array.push(6)", array.push(), array);

// array.pop();
console.log("array.pop()", array.pop(), array);

//~# QUEUE
// array.shift();

console.log("array.shift()", array.shift(), array);

console.log("array.pop()", array.pop(), array);

//~# SPLICE -> CAN DO ALL OF THE ABOVE THINGS
