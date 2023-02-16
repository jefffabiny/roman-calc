import NumberButtons from "./NumberButtons";
import HeaderButtons from "./HeaderButtons";
import OperatorButtons from "./OperatorButtons";

interface Props {
  handleClear: () => void;
  handleEquals: () => void;
  handleModeChange: () => void;
  handleNextDigit: (num: number) => void;
  handleOperator: (operator: string) => void;
  isRomanMode: boolean;
}

function ButtonsContain(props: Props) {
  const {
    handleClear,
    handleEquals,
    handleModeChange,
    handleNextDigit,
    handleOperator,
    isRomanMode,
  } = props;

  return (
    <div style={styles.wrapper}>
      <div className="makeBlock" style={styles.topContain}>
        <HeaderButtons
          handleClear={handleClear}
          handleEquals={handleEquals}
          handleModeChange={handleModeChange}
          isRomanMode={isRomanMode}
        />
      </div>
      <div className="makeBlock" style={styles.bottomContain}>
        <NumberButtons
          handleNextDigit={handleNextDigit}
          isRomanMode={isRomanMode}
        />
        <OperatorButtons handleOperator={handleOperator} />
      </div>
    </div>
  );
}

const styles = {
  bottomContain: {
    justifyContent: "space-between",
    width: "600px",
  },
  topContain: {
    width: "600px",
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: "#efefef",
    display: "flex",
    flex: 1,
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    padding: "0 2rem 2rem",
  },
};

export default ButtonsContain;
