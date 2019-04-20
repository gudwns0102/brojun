import React, { CSSProperties } from "react";
import styled from "styled-components";
import { HeaderNavBar } from "./HeaderNavBar";
import { SideNavBar } from "./SideNavBar";

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

const SideBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
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
      <SideBarContainer>
        <SideNavBar />
        <Main style={mainStyle}>{children}</Main>
      </SideBarContainer>
    </Container>
  );
}
