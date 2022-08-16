function Calc(operation, firstNumb, secondNumb) {
  const operations = {
    add: firstNumb + secondNumb,
    sub: firstNumb - secondNumb,
    multi: firstNumb * secondNumb,
  };
  if (typeof firstNumb !== 'number' || typeof secondNumb !== 'number') {
    return 'Введите число';
  } else {
    return operations[operation];
  }
}

console.log(Calc('add', 5, 5));
