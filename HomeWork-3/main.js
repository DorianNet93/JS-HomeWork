let num1 = prompt("Калькулятор: Введите первое число");
let operation = prompt("Калькулятор: Введите +, -, *, /");
let num2 = prompt("Калькулятор: Введите второе число");

let result;

switch (operation) {
  case "+":
    result = +num1 + +num2;
    break;
    
  case "-":
    result = num1 - num2;
    break;
  
  case "/":
    result = num1 / num2;
    break;

  case "*":
    result = num1 * num2;
    break;
  
  default:
    alert (`Попробуйте снова - следуя инструкции`);
    location.reload();
}

console.log(result);
