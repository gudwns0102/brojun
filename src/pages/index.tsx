import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { Cube } from "../components/Cube";
import { PageContainer } from "../components/layouts/PageContainer";
import SEO from "../components/seo";
import { Bold } from "../components/texts/Typographies";
import IndexCubeSection from "../sections/IndexCubeSection";

const Container = styled(PageContainer).attrs({
  headerStyle: {
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px white"
  },
  sideStyle: {
    display: "none"
  }
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const IndexPage = () => {
  return (
    <Container>
      <IndexCubeSection />
    </Container>
  );
};

export default IndexPage;
