import React, { CSSProperties } from "react";
import styled from "styled-components";

interface IPageContainerProps {
  children?: any;
  className?: string;
  style?: CSSProperties;
}

const Container = styled.div``;
const Main = styled.main``;

export function PageContainer({ children, ...props }: IPageContainerProps) {
  return (
    <Container {...props}>
      <Main>{children}</Main>
    </Container>
  );
}
