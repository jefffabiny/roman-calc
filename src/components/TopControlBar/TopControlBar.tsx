import * as Styled from "./styled";

interface Props {
  handleClear: () => void;
  handleEquals: () => void;
  handleModeChange: () => void;
  isRomanMode: boolean;
}

function TopControlBar(props: Props) {
  const { handleClear, handleEquals, handleModeChange, isRomanMode } = props;

  return (
    <Styled.Wrapper className="makeBlock">
      <Styled.FlexOne
        className="makeButton makeBlock"
        onClick={() => handleModeChange()}
      >
        {isRomanMode ? "Int Mode" : "Roman Mode"}
      </Styled.FlexOne>
      <Styled.FlexOne
        className="makeButton makeBlock"
        onClick={() => handleClear()}
      >
        Clear
      </Styled.FlexOne>
      <Styled.FlexOne
        className="makeButton makeBlock"
        onClick={() => handleEquals()}
      >
        =
      </Styled.FlexOne>
    </Styled.Wrapper>
  );
}

export default TopControlBar;
