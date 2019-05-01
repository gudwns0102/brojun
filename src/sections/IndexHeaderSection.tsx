import React from "react";
import styled from "styled-components";

import { BackgroundContainer } from "../components";
import bg from "../images/index-header-section-background.jpg";

const Container = styled(BackgroundContainer).attrs({ backgroundImage: bg })`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export function IndexHeaderSection() {
  return <Container />;
}
