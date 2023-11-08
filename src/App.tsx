import { useEffect, useState } from "react";

import "./App.css";
import InputContain from "./components/InputContain/InputContain";
import ButtonsContain from "./components/ButtonsContain/ButtonsContain";
import { CalcWrapper } from "./components/styled";
import { romanize } from "./helpers";

type OperationArgs = {
  newOperator?: string;
  isEquals?: boolean;
};

/**
 * The main calculator component that serves as the entry point for the application.
 * It manages the state for the calculator's display, the current equation, the calculator mode (Roman/Standard),
 * and any intermediate values needed for calculations.
 *
 * The component handles numeric input, performs arithmetic operations, switches between Roman and Standard modes,
 * and resets the calculator to its initial state. It leverages helper functions for arithmetic operations
 * and updates the display based on user interactions.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [equationValue, setEquationValue] = useState("");
  const [isRomanMode, setIsRomanMode] = useState(false);
  const [romanAsInt, setRomanAsInt] = useState("");

  useEffect(() => {
    if (romanAsInt === "") return;
    if (!isRomanMode) return;
    setDisplayValue(romanize(Number(romanAsInt)));
  }, [isRomanMode, romanAsInt]);

  function handleNextDigit(theNum: number) {
    if (isRomanMode) {
      setRomanAsInt(romanAsInt + theNum.toString());
    } else {
      setDisplayValue(displayValue + theNum.toString());
    }
  }

  /**
   * Handles the logic for when an arithmetic operator button is clicked in the calculator UI.
   * This function determines whether to append a new operator to the existing equation, replace the last operator,
   * or to perform the calculation if there's a number to operate on. It manages the state transition
   * depending on whether a new number has been input or if the user is chaining operations.
   *
   * @param {string} operator - The operator symbol (e.g., "+", "-", "*", "/") that was clicked.
   */
  function handleOperator(operator: string) {
    // Early return if there's no input to work with.
    if (!equationValue && !displayValue) return;

    const trimmedEquation = equationValue.trim();
    const lastChar = trimmedEquation.charAt(trimmedEquation.length - 1);

    // Replace the last operator if a new one is clicked without entering a new number.
    if (isLastCharAnOperator(lastChar) && !displayValue) {
      setEquationValue(replaceLastOperator(trimmedEquation, operator));
      return;
    }

    // If displayValue is set, either perform the operation or start a new one.
    if (displayValue) {
      performOperation({ newOperator: operator });
    } else {
      // If we're operating on the result of the previous operation, append the operator.
      setEquationValue(trimmedEquation + operator);
    }
  }

  function isLastCharAnOperator(character: string): boolean {
    return ["+", "-", "*", "/"].includes(character);
  }

  function replaceLastOperator(equation: string, newOperator: string): string {
    return equation.slice(0, -1) + newOperator;
  }

  function handleClear() {
    setDisplayValue("");
    setEquationValue("");
    setRomanAsInt("");
  }

  function handleEquals() {
    performOperation({ isEquals: true });
  }

  /**
   * Executes the arithmetic operation based on the current state of the equation.
   * It parses the left and right sides of the equation, applies the operation, and updates the state accordingly.
   * The function can handle the completion of an operation (equals pressed) or the chaining of another operation.
   *
   * @param {OperationArgs} [{ newOperator, isEquals = false }={}] - An object containing the new operator to apply
   * and a flag indicating if the equals button was pressed.
   */
  function performOperation({
    newOperator,
    isEquals = false,
  }: OperationArgs = {}) {
    const leftSide = Number(equationValue.slice(0, -1));
    const operator = equationValue.trim().slice(-1);
    const rightSide = isRomanMode ? Number(romanAsInt) : Number(displayValue);

    const operations: { [key: string]: () => number } = {
      "+": () => leftSide + rightSide,
      "-": () => leftSide - rightSide,
      "*": () => leftSide * rightSide,
      "/": () => leftSide / rightSide,
    };

    const answer = operations[operator]?.() ?? NaN;

    if (isEquals) {
      updateResult(answer);
    } else {
      continueEquation(answer, newOperator);
    }
  }

  function updateResult(answer: number) {
    setEquationValue("");
    setRomanAsInt(answer.toString());
    const resultString = isRomanMode ? romanize(answer) : answer.toString();
    setDisplayValue(resultString);
  }

  function continueEquation(answer: number, newOperator?: string) {
    setEquationValue(`${answer}${newOperator ?? ""}`);
    setDisplayValue("");
  }

  function handleModeChange() {
    setIsRomanMode(!isRomanMode);
    setEquationValue("");
    setDisplayValue("");
    setRomanAsInt("");
  }

  return (
    <CalcWrapper>
      <InputContain
        displayValue={displayValue}
        equationValue={equationValue}
        isRomanMode={isRomanMode}
        romanAsInt={romanAsInt}
      />
      <ButtonsContain
        handleClear={handleClear}
        handleEquals={handleEquals}
        handleModeChange={handleModeChange}
        handleNextDigit={handleNextDigit}
        handleOperator={handleOperator}
        isRomanMode={isRomanMode}
      />
    </CalcWrapper>
  );
}

export default App;
