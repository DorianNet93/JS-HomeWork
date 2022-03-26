let num1 = prompt("Калькулятор: Введите первое число");
let operation = prompt("Калькулятор: Введите +, -, *, /");
let num2 = prompt("Калькулятор: Введите второе число");

let sum = +num1 + +num2;
let multi = num1 * num2;
let sub = num1 - num2;
let div = num1 / num2;

function calc() {
  if (operation === "+"){
    alert(`${num1} + ${num2} = ` + sum);

  } else if (operation === "-"){
    alert(`${num1} - ${num2} = ` + sub);

  } else if (operation === "*"){
    alert(`${num1} * ${num2} = ` + multi);

  } else if (operation === "/"){
    alert(`${num1} / ${num2} = ` + div);

  } else {
    alert (`Попробуйте снова - следуя инструкции`);
    location.reload();
  }
}
calc()