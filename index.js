function mathLibrary(num1, num2, type = "sum") {
  switch (type) {
    case "sum":
      return Number(num1) + Number(num2);
    case "diff":
      return Number(num1) - Number(num2);
    case "prod":
      return Number(num1) * Number(num2);
    case "divide":
      return Number(num1) / Number(num2);
    case "modulus":
      return Number(num1) % Number(num2);
    default:
      return "Please provide correct details!";
  }
}
module.exports.mathwizard = mathLibrary;
