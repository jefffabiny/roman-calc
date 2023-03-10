import NumberButton from "./NumberButton";

interface Props {
  handleNextDigit: (num: number) => void;
  isRomanMode: boolean;
}

function NumberButtons(props: Props) {
  const { handleNextDigit, isRomanMode } = props;
  const arr = Array(10).fill(0);

  return (
    <div className="makeBlock" style={styles.wrapper}>
      {arr.map((val, index) => {
        let num = index + 1;
        if (num === 10) num = 0;
        return (
          <NumberButton
            key={num}
            num={num}
            handleNextDigit={handleNextDigit}
            isRomanMode={isRomanMode}
          />
        );
      })}
    </div>
  );
}

const styles = {
  wrapper: {
    flexWrap: "wrap" as const,
  },
};

export default NumberButtons;
