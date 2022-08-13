function calc(operation, a, b) {
  switch (operation) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;
  }
}

console.log(calc('+', 4, 5));
console.log(calc('-', 4, 5));
