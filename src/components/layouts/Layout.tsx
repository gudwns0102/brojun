import React, { CSSProperties } from "react";
import styled from "styled-components";

interface ILayoutProps {
  children?: any;
  className?: string;
  style?: CSSProperties;
  containerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  sideStyle?: CSSProperties;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main``;

export function Layout({
  children,
  className,
  style,
  containerStyle,
  headerStyle,
  sideStyle,
  ...props
}: ILayoutProps) {
  return (
    <Container {...props} style={containerStyle}>
      <Main style={style} className={className}>
        {children}
      </Main>
    </Container>
  );
}
