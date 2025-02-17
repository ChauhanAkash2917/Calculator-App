let inputFild = document.querySelector("#input");
let resultFild = document.querySelector("#result");

function appendValue(value) {
  inputFild.textContent += value;
}

function cleardisplay() {
  inputFild.textContent = "";
  resultFild.textContent = "";
}

function calculateResult() {
  try {
    resultFild.textContent = eval(inputFild.textContent);
  } catch (e) {
    resultFild.textContent = "Error: Invalid expression";
  }
}
