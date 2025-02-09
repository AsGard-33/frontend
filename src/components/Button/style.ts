import styled from "@emotion/styled";

interface ButtonComponentProps {
  isRed: boolean | undefined;
  disabled?: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({ isRed, disabled }) =>
    disabled ? "#d3d3d3" : isRed ? "red" : "rgba(81, 83, 84, 0.3)"};
  color: white;
  font-size: 25px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &:hover {
    background-color: ${({ isRed, disabled }) =>
      disabled ? "#202121" : isRed ? "darkred" : "#fcfcfc"};
      color: black;
  }

  @media (max-width: 768px) {
    height: 50px;
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 40px;
    padding: 10px;
    font-size: 12px;
  }
`;
