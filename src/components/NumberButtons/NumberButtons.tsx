import NumberButton from "../NumberButton/NumberButton";

import * as Styled from "./styled";

interface Props {
  handleNextDigit: (num: number) => void;
  isRomanMode: boolean;
}

const NumberButtons: React.FC<Props> = ({ handleNextDigit, isRomanMode }) => {
  const numbers = Array.from({ length: 10 }, (_, index) => (index + 1) % 10);

  return (
    <Styled.Wrapper className="makeBlock">
      {numbers.map((num) => (
        <NumberButton
          key={num}
          num={num}
          handleNextDigit={handleNextDigit}
          isRomanMode={isRomanMode}
        />
      ))}
      <Styled.Equals className="makeBlock makeButton">=</Styled.Equals>
    </Styled.Wrapper>
  );
};

export default NumberButtons;
