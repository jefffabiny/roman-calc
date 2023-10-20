import NumberButtons from "../NumberButtons";
import OperatorButtons from "../OperatorButtons";
import TopControlBar from "../TopControlBar/TopControlBar";

import * as Styled from "./styled";

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
    <Styled.Wrapper>
      <Styled.TopControlBarContain className="makeBlock">
        <TopControlBar
          handleClear={handleClear}
          handleEquals={handleEquals}
          handleModeChange={handleModeChange}
          isRomanMode={isRomanMode}
        />
      </Styled.TopControlBarContain>
      <Styled.NumbersAndOperandsContain className="makeBlock">
        <NumberButtons
          handleNextDigit={handleNextDigit}
          isRomanMode={isRomanMode}
        />
        <OperatorButtons handleOperator={handleOperator} />
      </Styled.NumbersAndOperandsContain>
    </Styled.Wrapper>
  );
}

export default ButtonsContain;
