import React, { CSSProperties } from "react";
import styled from "styled-components";
import { HeaderNavBar } from "./HeaderNavBar";
import { SideNavBar } from "./SideNavBar";

interface IPageContainerProps {
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

const SideBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  width: 100%;
  flex: 1;
`;

export function PageContainer({
  children,
  className,
  style,
  containerStyle,
  headerStyle,
  sideStyle,
  ...props
}: IPageContainerProps) {
  return (
    <Container {...props} style={containerStyle}>
      <HeaderNavBar style={headerStyle} />
      <SideBarContainer>
        <SideNavBar style={sideStyle} />
        <Main style={style} className={className}>
          {children}
        </Main>
      </SideBarContainer>
    </Container>
  );
}
