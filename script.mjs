function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");
    var errorElement = document.getElementById("error");

    if (isNaN(num1) || isNaN(num2)) {
      errorElement.textContent = "Please enter valid numbers";
      resultElement.textContent = "";
    } else if (num2 === 0) {
      errorElement.textContent = "Cannot divide by zero";
      resultElement.textContent = "";
    } else {
      errorElement.textContent = "";
      var sum = num1 + num2;
      var difference = num1 - num2;
      var product = num1 * num2;
      var quotient = num1 / num2;
      resultElement.innerHTML =
        "Sum: " + sum + "<br>" +
        "Difference: " + difference + "<br>" +
        "Product: " + product + "<br>" +
        "Quotient: " + quotient;
    }
  }
