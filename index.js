function mathLibrary(options) {
  let { type, num1, num2 } = options;
  let result = document.getElementById("#result");

  switch (type) {
    case "sum":
      console.log(num1 + num2);
      return num1 + num2;
    case "diff":
      console.log(num1 - num2);
      return num1 - num2;
    case "prod":
      console.log(num1 * num2);
      return num1 * num2;
    case "divide":
      console.log(num1 / num2);
      return num1 / num2;
    case "modulus":
      console.log(num1 % num2);
      return num1 % num2;
    default:
      return "Please provide correct details!";
  }
}
module.exports.mathwizard = mathLibrary;
