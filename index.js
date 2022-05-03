function mathLibrary(options) {
  let { type, num1, num2 } = options;
  const div = document.createElement("div");
  console.log(type, num1, num2);
  switch (type) {
    case "sum":
      div.textContent = `Result is : ${num1 + num2}`;
      break;
    case "diff":
      div.textContent = `Result is : ${num1 - num2}`;
      break;
    case "prod":
      div.textContent = `Result is : ${num1 * num2}`;
      break;
    case "divide":
      div.textContent = `Result is : ${num1 / num2}`;
      break;
    case "modulus":
      div.textContent = `Result is : ${num1 % num2}`;
      break;
    default:
      div.textContent = "Please provide correct details!";
      break;
  }
  document.body.appendChild(div);
}
module.exports.mathwizard = mathLibrary;
