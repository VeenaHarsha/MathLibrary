function mathLibrary(options) {
  let { type, num1, num2 } = options;
  let result = document.getElementById("#result");

  switch (type) {
    case "sum":
      result.innerHTML = Number(num1) + Number(num2);
    case "diff":
      result.innerHTML = Number(num1) - Number(num2);
    case "prod":
      result.innerHTML = Number(num1) * Number(num2);
    case "divide":
      result.innerHTML = Number(num1) / Number(num2);
    case "modulus":
      result.innerHTML = Number(num1) % Number(num2);
    default:
      result.innerHTML = "Please provide correct details!";
  }
}
module.exports.mathwizard = mathLibrary;
