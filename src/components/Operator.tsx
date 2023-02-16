interface Props {
  handleOperator: (operator: string) => void;
  operator: string;
}

function Operator(props: Props) {
  const { handleOperator, operator } = props;

  return (
    <div
      className="makeBlock makeButton"
      style={styles.wrapper}
      onClick={() => handleOperator(operator)}
    >
      {operator}
    </div>
  );
}

const styles = {
  wrapper: {
    flex: 1,
    maxHeight: "70px",
    width: "80px",
  },
};

export default Operator;
