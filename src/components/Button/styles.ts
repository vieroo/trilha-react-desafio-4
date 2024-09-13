import { ReactNode } from "react";
import styled from "styled-components";

export const ButtonContainer = styled.button<{
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
