import React from "react";

import { Container, Input, RunningTotal } from "./styled";

interface Props {
  displayValue: string;
  equationValue: string;
  isRomanMode: boolean;
  romanAsInt: string;
}

function InputContain(props: Props) {
  const { displayValue, equationValue, isRomanMode, romanAsInt } = props;

  return (
    <Container className="makeBlock">
      <RunningTotal>
        <div>{equationValue}</div>
        <div>{isRomanMode ? `(${romanAsInt})` : null}</div>
      </RunningTotal>
      <Input
        className="inputField"
        disabled={true}
        style={{ color: "#f4f4f4" }}
        value={displayValue}
      />
    </Container>
  );
}

export default InputContain;
