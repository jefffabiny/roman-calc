import { Wrapper } from "./styled";

interface Props {
  handleOperator: (operator: string) => void;
  operator: string;
}

function Operator(props: Props) {
  const { handleOperator, operator } = props;

  return (
    <Wrapper
      className="makeBlock makeButton"
      onClick={() => handleOperator(operator)}
    >
      {operator}
    </Wrapper>
  );
}

export default Operator;
