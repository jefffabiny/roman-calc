import { romanize } from "../../helpers";

import * as Styled from "./styled";

interface Props {
  handleNextDigit: (num: number) => void;
  isRomanMode: boolean;
  num: number;
}

const NumberButton: React.FC<Props> = ({
  num,
  handleNextDigit,
  isRomanMode,
}) => {
  function getDisplayNum(num: number) {
    if (num === 0) return 0;
    return romanize(num);
  }

  const displayNum = isRomanMode ? getDisplayNum(num) : num;

  return (
    <Styled.Wrapper
      className="makeBlock makeButton"
      onClick={() => handleNextDigit(num)}
    >
      {displayNum}
    </Styled.Wrapper>
  );
};

export default NumberButton;
