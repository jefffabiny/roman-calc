import { useEffect, useState } from "react";

interface Props {
  displayValue: string;
  equationValue: string;
  isRomanMode: boolean;
  romanAsInt: string;
}

function InputContain(props: Props) {
  const { displayValue, equationValue, isRomanMode, romanAsInt } = props;

  return (
    <div className="inputContain makeBlock" style={styles.text}>
      <div style={styles.block}>
        <div>{equationValue}</div>
        <div>{isRomanMode ? `(${romanAsInt})` : null}</div>
      </div>
      <input
        className="inputField"
        disabled={true}
        style={styles.text}
        value={displayValue}
      />
    </div>
  );
}

const styles = {
  block: {
    display: "flex",
    flexDirection: "column" as const,
  },
  text: {
    color: "#f4f4f4",
  },
};

export default InputContain;
