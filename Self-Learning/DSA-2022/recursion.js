function fn(value) {
  value++;

  if (value > 4) return;
  console.log(value);

  fn(value);
}

fn(0);
