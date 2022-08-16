// let nameOfficialJS = prompt('Какое «официальное» название JavaScript?', '');
// if (nameOfficialJS == 'ECMAScript') {
//   alert('Верно');
// } else {
//   alert('Не знаете? ECMAScript!');
// }
// let numb = prompt('Введите число', 0);
// if (numb > 0) {
//   alert(1);
// } else if (numb < 0) {
//   alert(-1);
// } else if (numb == 0) {
//   alert(0);
// }
// let age = 100;
// if (age < 14 || age > 90) {
//   console.log(age);
// } else {
//   console.log('Fuck');
// }
// let age = 5;
// if (!(age >= 14) && age <= 90) {
//   console.log(age);
// } else {
//   console.log('Fuck');
// }
// if (-1 && 0) console.log('second');
// let loginUser = prompt('Кто там?', '');
// if (loginUser === 'Админ') {
//   let passUser = prompt('Пароль?', '');
//   if (passUser === 'Я главный') {
//     alert('Здравствуйте!');
//   } else if (passUser == 0 || passUser == undefined) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (loginUser == 0 || loginUser == undefined) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

// let firstNumb = prompt('Введите число');
// let secondNumb = prompt('Введите число');
// if (Boolean(+firstNumb) === true && Boolean(+secondNumb) === true) {
//   let operation = prompt('Введите математичекую операцию', '+, -, /, *');
//   if (operation === '+') {
//     let sum = +firstNumb + +secondNumb;
//     alert(sum);
//   } else if (operation === '-') {
//     let sub = +firstNumb - +secondNumb;
//     alert(sub);
//   } else if (operation === '*') {
//     let mul = +firstNumb * +secondNumb;
//     alert(mul);
//   } else if (operation === '/') {
//     let del = +firstNumb / +secondNumb;
//     alert(del);
//   } else {
//     alert('Отмена операции.');
//   }
// } else {
//   alert('Неверно, попробуйте ввести число');
// }

// if (Boolean(firstNumb) === false && Boolean(secondNumb) === false) {
//   alert('Вы не ввели число');
// } else if (isNaN(firstNumb) != true && isNaN(secondNumb) != true) {
//   let sum;
//   sum = +firstNumb + +secondNumb;
//   alert(sum);
// } else {
//   alert('Попробуйте заново');
// }
// if (
//   firstNumb === '' ||
//   secondNumb === '' ||
//   firstNumb == null ||
//   secondNumb == null ||
//   isNaN(firstNumb / firstNumb) === true ||
//   isNaN(secondNumb / secondNumb) === true
// ) {
//   alert('Вы не ввели число');
// } else if (isNaN(firstNumb) != true && isNaN(secondNumb) != true) {
//   let sum;
//   sum = +firstNumb + +secondNumb;
//   alert(sum);
// }

// let checkOnSpaces = firstNumb !== ' ' || secondNumb !== ' ';
// let checkOnNumber = firstNumb === '' || secondNumb === '';

// if (!checkOnSpaces || checkOnNumber) {
//   alert('Вы не ввели число');
// } else if (isNaN(firstNumb) == false && isNaN(secondNumb) == false) {
//   let sum;
//   sum = +firstNumb + +secondNumb;
//   alert(sum);
// } else {
//   alert('Попробуйте заново');
// }

// function calc(operation, a, b) {
//   if (operation === '+') {
//     return a + b;
//   } else if (operation === '-') {
//     return a - b;
//   } else if (operation === '*') {
//     return a * b;
//   }
// }
// console.log(calc('+', 4, 5));
// console.log(calc('-', 4, 5));

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   return confirm('Родители разрешили?');
// }
// alert(checkAge(5));

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }

//
// function getMinNum(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(getMinNum(3,

// let value1 = calc('add', 1, 2);
// let value2 = calc('multi', 1, 2);
// let value3 = calc('subtract', 3, 2);

// function calc(operation, a, b) {
//   switch (operation) {
//     case '+':
//       return a + b;

//     case '-':
//       return a - b;

//     case '*':
//       return a * b;
//   }
// }
// console.log(calc('+', 4, 5));
// console.log(calc('-', 4, 5));

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 || flower2 % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// function multiplyNumeric() {
//   for (let key in menu) {
//     if (typeof menu[key] === 'number') menu[key] *= 2;
//   }
//   console.log(menu);
// }
// multiplyNumeric(menu);

function Calc(operation, firstNumb, secondNumb) {
  const operations = {
    add: firstNumb + secondNumb,
    sub: firstNumb - secondNumb,
    multi: firstNumb * secondNumb,
  };
  if (typeof firstNumb !== 'number' || typeof secondNumb !== 'number') {
    return 'Введите число';
  } else {
    for (let key in operations) {
      if (key == operation) {
        return operations[key];
      } else return 'Error';
    }
  }
}

console.log(Calc('add', 5, 5));

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
