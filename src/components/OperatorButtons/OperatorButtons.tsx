import Operator from "../Operator/Operator";
import { Wrapper } from "./styled";

interface Props {
  handleOperator: (operator: string) => void;
}

function OperatorButtons(props: Props) {
  const { handleOperator } = props;

  return (
    <Wrapper className="makeBlock">
      <Operator operator="+" handleOperator={handleOperator} />
      <Operator operator="-" handleOperator={handleOperator} />
      <Operator operator="*" handleOperator={handleOperator} />
      <Operator operator="/" handleOperator={handleOperator} />
    </Wrapper>
  );
}

export default OperatorButtons;
