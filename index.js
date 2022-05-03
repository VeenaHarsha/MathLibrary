function mathLibrary(options) {
  let { type, num1, num2 } = options;
  const div = document.createElement("div");

  switch (type) {
    case "sum":
      console.log(num1 + num2);
      div.textContent = num1 + num2;
    case "diff":
      console.log(num1 - num2);
      div.textContent = num1 - num2;
    case "prod":
      console.log(num1 * num2);
      div.textContent = num1 * num2;
    case "divide":
      console.log(num1 / num2);
      div.textContent = num1 / num2;
    case "modulus":
      console.log(num1 % num2);
      div.textContent = num1 % num2;
    default:
      div.textContent = "Please provide correct details!";
  }
  document.body.appendChild(div);
}
module.exports.mathwizard = mathLibrary;
