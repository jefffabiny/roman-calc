import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-end;
  background-color: #1e1e1e;
  color: #f4f4f4;
  flex-direction: column;
  height: 50%;
  justify-content: flex-end;
  padding: 1rem;
`;

export const RunningTotal = styled.div`
  display: flex;
  flexdirection: column;
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  appearance: none;
  background: none;
  border: none;
  font-size: 2rem;
  outline: none;
  text-align: right;
  width: 100%;
`;
