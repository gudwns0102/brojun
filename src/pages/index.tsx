import React from "react";
import styled from "styled-components";

import { Cube } from "../components/Cube";
import { PageContainer } from "../components/layouts/PageContainer";
import SEO from "../components/seo";
import { Bold } from "../components/texts/Typographies";

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
  width: 100%;
  height: 100%;
  padding-top: 56px;
`;

const Content = styled(Bold)`
  display: block;
  font-size: 64px;
  margin-bottom: 80px;
`;

const StyledCube = styled(Cube).attrs({ edge: 200 })``;

const IndexPage = () => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Content>김형준</Content>
    <StyledCube />
  </Container>
);

export default IndexPage;
