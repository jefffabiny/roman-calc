import React from "react";

interface Props {
  handleClear: () => void;
  handleEquals: () => void;
  handleModeChange: () => void;
  isRomanMode: boolean;
}

function HeaderButtons(props: Props) {
  const { handleClear, handleEquals, handleModeChange, isRomanMode } = props;

  return (
    <div className="makeBlock" style={styles.wrapper}>
      <div
        className="makeButton makeBlock"
        style={styles.button}
        onClick={() => handleModeChange()}
      >
        {isRomanMode ? "Int Mode" : "Roman Mode"}
      </div>
      <div
        className="makeButton makeBlock"
        style={styles.button}
        onClick={() => handleClear()}
      >
        Clear
      </div>
      <div
        className="makeButton makeBlock"
        style={styles.button}
        onClick={() => handleEquals()}
      >
        =
      </div>
    </div>
  );
}

const styles = {
  button: { flex: 1 },
  wrapper: { flex: 1, flexDirection: "row" as const, maxWidth: "600px" },
};

export default HeaderButtons;
