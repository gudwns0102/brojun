import React, { CSSProperties } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Bold } from "./texts/Typographies";

export type CubePaneChildType = number | string | JSX.Element;

export interface ICubePaneProps {
  children?: CubePaneChildType | CubePaneChildType[];
  className?: string;
  style?: CSSProperties;
}

const Pane = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  border-radius: 8px;
`;

const Title = styled(Bold)`
  font-size: 24px;
  color: ${colors.white};
`;

function StyledPane({ children, ...props }: ICubePaneProps) {
  return (
    <Pane {...props}>
      {typeof children === "string" ? <Title>{children}</Title> : children}
    </Pane>
  );
}

export const CubePane = React.memo(StyledPane);
