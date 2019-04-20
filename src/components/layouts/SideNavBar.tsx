import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { MediaQuerySize } from "../../utils/mediaQuerySizes";

const Container = styled.nav`
  display: block;
  width: 240px;
  height: 100vh;
  background-color: ${colors.gray900};
`;

export function SideNavBar() {
  return (
    <MediaQuery minWidth={MediaQuerySize.medium}>
      <Container />
    </MediaQuery>
  );
}
