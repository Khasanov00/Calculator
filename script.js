// 1. SELECT elements
const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
const functionButtons = document.querySelectorAll(".functionButtons");
const equalButton = document.querySelector("#equal");
const numberButtons = document.querySelectorAll(".numberButtons");

// 2. CREATE variables
let firstNumber = "";
let operator = "";
let secondNumber = "";

// 3. CREATE functions
function operate(num1, op, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (op === "/" && num2 === 0) return "error";
    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
    if (op === "/") return num1 / num2;
}

// 4. ADD event listeners
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// 5. UPDATE display
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
});

// 6. OPERATE
functionButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.value === "") return; // prevent operator if empty

        if (firstNumber !== "" && display.value !== "") {
            secondNumber = display.value;
            let result = operate(firstNumber, operator, secondNumber);
            display.value = result;
            firstNumber = result;
        } else {
            firstNumber = display.value;
        }

        operator = button.textContent;
        display.value = "";
    });
});

equalButton.addEventListener("click", () => {
    if (display.value === "" || firstNumber === "" || operator === "") return;

    secondNumber = display.value;

    console.log("first:", firstNumber);
    console.log("operator:", operator);
    console.log("second:", secondNumber);

    let result = operate(firstNumber, operator, secondNumber);
    display.value = result;
    firstNumber = result; // allow continuing operations
});