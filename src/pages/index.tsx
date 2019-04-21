import React from "react";
import styled from "styled-components";

import { HeaderNavBar } from "../components/layouts/HeaderNavBar";
import IndexCubeSection from "../sections/IndexCubeSection";
import IndexTechStackSection from "../sections/IndexTechStackSection";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const StyledHeaderNavBar = styled(HeaderNavBar)`
  position: fixed;
  background-color: transparent;
  box-shadow: 0px 0px 0px transparent;
`;

const IndexPage = () => {
  return (
    <Container>
      <StyledHeaderNavBar />
      <IndexCubeSection />
      <IndexTechStackSection />
    </Container>
  );
};

export default IndexPage;
