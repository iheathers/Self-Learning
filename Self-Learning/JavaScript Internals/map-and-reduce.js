const array = [1, 2, 3];

//~% CAN BE USED TO TRANSFORM AND ACCUMULATE VALUES
console.log(array.reduce((total, value) => total + value * value));

console.log(
  array.reduce((output, value) => {
    output.push(value * value);
    return output;
  }, [])
);

//~% TRANSFORMATION
console.log(array.map((value) => value * value));

console.log(array.map((value) => ({ [value]: value }))); //! DYNAMIC KEYS

//~* WITHOUT THESE WE WOULD BE WRITING A LOT OF IFS AND FOR LOOPS
