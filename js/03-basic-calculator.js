// ADD A FUNCTION CALLED CALCULATE

function calculate(x, y, operation) {
    switch (operation) {
      case "add":
        return x + y;
      case "subtract":
        return x - y;
      case "multiply":
        return x * y;
      case "divide":
        return x / y;
      default:
        alert("Invalid operation! Please choose add, subtract, multiply, or divide.");
        return NaN; 
    }
  }

// COLLECT FIRST NUMBER  & SECOND NUMBER FROM USER

function mainCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER


let operation;
do {
  operation = prompt("Choose an operation (add, subtract, multiply, divide):").toLowerCase();
} while (!["add", "subtract", "multiply", "divide"].includes(operation));

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
  
    const result = calculate(num1, num2, operation);
    if (!isNaN(result)) {
      alert(`The result of ${operation}ing ${num1} and ${num2} is ${result}.`);
    }
  }

// Run the calculator
mainCalculator();