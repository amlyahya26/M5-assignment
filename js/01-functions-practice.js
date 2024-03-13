//STEP 1
 
function halfNumber(number) {
    const half = number / 2;
    console.log(`Half of ${number} is ${half}.`);
    return half;
  }
  
  const inputNumber = 5;
  const halfResult = halfNumber(inputNumber);
  console.log(`Half result: ${halfResult}`);


//STEP 2

function squareNumber(number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
  }
  
  const inputSquareNumber = 3;
  const squaredResult = squareNumber(inputSquareNumber);
  console.log(`Squared result: ${squaredResult}`);

//STEP 3

function percentOf(firstNumber, secondNumber) {
    const percentage = (firstNumber / secondNumber) * 100;
    console.log(`${firstNumber} is ${percentage}% of ${secondNumber}.`);
    return percentage;
  }
  
  const num1 = 2;
  const num2 = 4;
  const calculatedPercentage = percentOf(num1, num2);
  console.log(`Calculated percentage: ${calculatedPercentage}%`);

//STEP 4

function findModulus(num1, num2) {
    const modulus = ((num1 % num2) + num2) % num2;
    console.log(`${num1} is the modulus of ${num2} and ${num1 + num2}.`);
    return modulus;
  }
  
  const firstNum = 2;
  const secondNum = 4;
  const resultModulus = findModulus(firstNum, secondNum);
  console.log(`Calculated modulus: ${resultModulus}`);


