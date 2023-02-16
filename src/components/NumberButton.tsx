import { romanize } from "../helpers";

interface Props {
  handleNextDigit: (num: number) => void;
  isRomanMode: boolean;
  num: number;
}

function getDisplayNum(num: number) {
  if (num === 0) return 0;
  return romanize(num);
}

function NumberButton(props: Props) {
  const { num, handleNextDigit, isRomanMode } = props;
  return (
    <div
      className="makeBlock makeButton"
      onClick={() => handleNextDigit(num)}
      style={styles.wrapper}
    >
      {isRomanMode ? getDisplayNum(num) : num}
    </div>
  );
}

const styles = {
  wrapper: {
    flex: "0 0 26%",
  },
};

export default NumberButton;
