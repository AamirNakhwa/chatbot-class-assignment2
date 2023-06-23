const calculate = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");
  const errorElement = document.getElementById("error");

  if (isNaN(num1) || isNaN(num2)) {
    errorElement.textContent = "Please enter valid numbers";
    resultElement.textContent = "";
  } else if (num2 === 0) {
    errorElement.textContent = "Cannot divide by zero";
    resultElement.textContent = "";
  } else {
    errorElement.textContent = "";
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
    resultElement.innerHTML =
      `Sum: ${sum}<br>` +
      `Difference: ${difference}<br>` +
      `Product: ${product}<br>` +
      `Quotient: ${quotient}`;
  }
};
document.getElementById("calculateButton").addEventListener("click", calculate);