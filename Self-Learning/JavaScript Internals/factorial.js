function factorial(n) {
  let product = 1n;

  for (let i = 1n; i <= n; i++) {
    product = product * i;
  }

  console.log(Infinity, typeof Infinity);
}

factorial(10000);
