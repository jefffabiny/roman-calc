import Operator from "./Operator";

interface Props {
  handleOperator: (operator: string) => void;
}

function OperatorButtons(props: Props) {
  const { handleOperator } = props;

  return (
    <div className="makeBlock" style={styles.wrapper}>
      <Operator operator="+" handleOperator={handleOperator} />
      <Operator operator="-" handleOperator={handleOperator} />
      <Operator operator="*" handleOperator={handleOperator} />
      <Operator operator="/" handleOperator={handleOperator} />
    </div>
  );
}

const styles = {
  wrapper: {
    flexDirection: "column" as const,
    height: "100%",
  },
};

export default OperatorButtons;
