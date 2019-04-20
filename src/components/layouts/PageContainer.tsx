import React, { CSSProperties } from "react";
import styled from "styled-components";
import { HeaderNavBar } from "./HeaderNavBar";

interface IPageContainerProps {
  children?: any;
  className?: string;
  style?: CSSProperties;
  mainStyle?: CSSProperties;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export function PageContainer({
  children,
  mainStyle,
  ...props
}: IPageContainerProps) {
  return (
    <Container {...props}>
      <HeaderNavBar />
      <Main style={mainStyle}>{children}</Main>
    </Container>
  );
}
