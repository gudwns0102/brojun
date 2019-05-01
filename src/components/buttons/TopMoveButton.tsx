import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";
import { Regular } from "../texts/Typographies";
import { Button } from "./Button";

interface IProps {
  className?: string;
  onClick?: () => void;
}

const Container = styled(Button)`
  width: 40px;
  height: 80px;
  background-color: ${colors.gray900};
  opacity: 0.8;
  border-radius: 10px;
`;

const Content = styled(Regular)`
  font-size: 14px;
  color: ${colors.white};
`;

export function TopMoveButton(props: IProps) {
  return (
    <Container {...props}>
      <Content>TOP</Content>
    </Container>
  );
}
