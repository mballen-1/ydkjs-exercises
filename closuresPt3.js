function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function calculator() {
  var carry = 0;
  var left, right, operator;
  return (next) => {
    if (next === "=") {
      console.log("left", left);
      console.log("operator", operator);
      console.log("right", right);
      console.log("currentResult", carry);
      if (!carry) {
        carry = eval(`${left}${operator}${right}`);
      } else {
        carry = eval(`${carry}${operator}${right}`);
      }
      left = undefined;
      right = undefined;
      operator = undefined;
      console.log("currentResult", carry);
    } else {
      if (isOperator(next)) {
        // console.log("isOperator", next);
        operator = next;
      } else {
        if (!carry) {
          if (!left) {
            left = next;
          } else {
            left += next;
          }
          if (!right) {
            right = next;
          } else {
            right += next;
          }
        } else {
          if (!left) {
            left = next;
          } else {
            left += next;
          }
          if (!right) {
            right = next;
          } else {
            right += next;
          }
        }
      }
    }
  };
}

var calc = calculator();

function useCalc(calc, keys) {
  return [...keys].reduce(function showDisplay(display, key) {
    var ret = String(calc(key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
}

function formatTotal(display) {
  if (Number.isFinite(display)) {
    // constrain display to max 11 chars
    let maxDigits = 11;
    // reserve space for "e+" notation?
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    // reserve space for "-"?
    if (display < 0) {
      maxDigits--;
    }
    // whole number?
    if (Number.isInteger(display)) {
      display = display.toPrecision(maxDigits).replace(/\.0+$/, "");
    }
    // decimal
    else {
      // reserve space for "." maxDigits--;
      // reserve space for leading "0"?
      if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
        maxDigits--;
      }
      display = display.toPrecision(maxDigits).replace(/0+$/, "");
    }
  } else {
    display = "ERR";
  }
  return display;
}

useCalc(calc, "4+3=");
useCalc(calc, "+9=");
useCalc(calc, "*8=");
useCalc(calc, "7*2*3=");
useCalc(calc, "1/0=");
useCalc(calc, "+3=");
useCalc(calc, "51=");
