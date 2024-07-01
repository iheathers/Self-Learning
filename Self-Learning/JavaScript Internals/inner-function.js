function outerFunction() {
  const innerFunction = () => {
    console.log("innerFunction called");
  };

  return innerFunction;
}

// outerFunction();

const innerFunctionRef = outerFunction();
innerFunctionRef();

// outerFunction.innerFunction();
