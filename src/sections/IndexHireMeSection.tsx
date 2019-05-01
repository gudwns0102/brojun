import React from "react";
import styled from "styled-components";

import { BackgroundContainer, Button } from "../components/";
import { colors } from "../styles/colors";

const Container = styled(BackgroundContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const EmailButton = styled(Button)`
  font-size: 24px;
  border-radius: 16px;
  padding: 8px 16px;
  color: ${colors.white};
  background-color: ${colors.blue500};
  box-shadow: 2px 4px 4px ${colors.blue300};
`;

export const IndexHireMeSection = React.memo(() => {
  const navigateToEmail = () => {
    if (typeof window !== undefined) {
      window.location.href = "mailto:sejong3408@gmail.com";
    }
  };

  return (
    <Container>
      <EmailButton onClick={navigateToEmail}>HIRE ME</EmailButton>
    </Container>
  );
});
