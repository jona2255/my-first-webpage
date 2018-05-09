var calcButtons = document.getElementsByClassName("calc-btn");

var equalButton = document.getElementById("btn-equal")

var resetButton = document.getElementById("btn-reset")

console.log(calcButtons);

Array.prototype.forEach.call(calcButtons, function(el) {
    el.addEventListener("click", formulaAddValue);
});

// Or

[].forEach.call(calcButtons, function (el) {
  el.addEventListener("click", formulaAddValue);
});

resetButton.addEventListener("click", formulaReset);

equalButton.addEventListener("click", formulaEval);

function formulaAddValue() {
    console.log("formulaAddValue");
    console.log(this.value);

    var formula = document.getElementById("formula")

    console.log(formula)
    formula.value = formula.value + this.value;
}

function formulaEval() {

  formula.value = eval(formula.value)

}

function formulaReset() {
  formula.value = "";
}
