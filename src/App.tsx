import { useEffect, useState } from "react";

import "./App.css";
import InputContain from "./components/InputContain";
import ButtonsContain from "./components/ButtonsContain";
import { romanize } from "./helpers";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [equationValue, setEquationValue] = useState("");
  const [isRomanMode, setIsRomanMode] = useState(false);
  const [romanAsInt, setRomanAsInt] = useState("");

  useEffect(() => {
    if (romanAsInt === "") return;
    if (!isRomanMode) return;
    setDisplayValue(romanize(Number(romanAsInt)));
  }, [romanAsInt]);

  function handleNextDigit(theNum: number) {
    if (isRomanMode) {
      setRomanAsInt(romanAsInt + theNum.toString());
    } else {
      setDisplayValue(displayValue + theNum.toString());
    }
  }

  function handleOperator(operator: string) {
    // No left side value to operate on; return.
    if (equationValue.length === 0 && displayValue.length === 0) return;

    if (
      ["+", "-", "*", "/"].includes(
        equationValue.trim().charAt(equationValue.length - 1)
      )
    ) {
      // There is already an operator on the end.
      if (displayValue === "") {
        // No new numbers; user wants to change operator.
        setEquationValue(
          equationValue.substring(0, equationValue.length - 1) + operator
        );
      } else {
        // Complex operation.
        console.log("here");
        performOperation({ newOperator: operator });
      }
    } else {
      // No operator in equation yet.
      if (equationValue.length === 0) {
        // First operator; set new equation value.
        if (isRomanMode) {
          setEquationValue(romanAsInt + operator);
          setRomanAsInt("");
        } else {
          setEquationValue(displayValue + operator);
        }
        // Reset display.
        setDisplayValue("");
      } else {
        if (displayValue.length === 0) {
          // Operating on answer; append to equation;
          setEquationValue(equationValue + operator);
        } else {
          // Complex equation; perform opeation.
          performOperation({ newOperator: operator });
        }
      }
    }
  }

  function handleClear() {
    setDisplayValue("");
    setEquationValue("");
    setRomanAsInt("");
  }

  function handleEquals() {
    performOperation({ isEquals: true });
  }

  function performOperation(args?: {
    newOperator?: string;
    isEquals?: boolean;
  }) {
    const leftSide = Number(
      equationValue.substring(0, equationValue.length - 1)
    );
    const opeartor = equationValue.trim().charAt(equationValue.length - 1);
    const rightSide = isRomanMode ? Number(romanAsInt) : Number(displayValue);
    let answer: number | string;
    switch (opeartor) {
      case "+":
        answer = leftSide + rightSide;
        break;
      case "-":
        answer = leftSide - rightSide;
        break;
      case "*":
        answer = leftSide * rightSide;
        break;
      case "/":
        answer = leftSide / rightSide;
        break;
      default:
        answer = NaN;
    }

    if (args?.isEquals) {
      setEquationValue("");
      setRomanAsInt(answer.toString());
      setDisplayValue(
        isRomanMode ? romanize(answer as number).toString() : answer.toString()
      );
    } else {
      setEquationValue(
        answer.toString() + (args?.newOperator ? args?.newOperator : "")
      );
      setDisplayValue("");
    }
  }

  function handleModeChange() {
    setIsRomanMode(!isRomanMode);
    setEquationValue("");
    setDisplayValue("");
    setRomanAsInt("");
  }

  return (
    <div className="calcWrapper">
      <InputContain
        displayValue={displayValue}
        equationValue={equationValue}
        isRomanMode={isRomanMode}
        romanAsInt={romanAsInt}
      />
      <ButtonsContain
        handleNextDigit={handleNextDigit}
        handleClear={handleClear}
        handleEquals={handleEquals}
        handleOperator={handleOperator}
        isRomanMode={isRomanMode}
        handleModeChange={handleModeChange}
      />
    </div>
  );
}

export default App;
