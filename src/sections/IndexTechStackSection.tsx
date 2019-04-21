import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: powderblue;
  scroll-snap-align: start;
`;

const IndexTechStackSection = () => {
  return (
    <Container>
      <span>test</span>
    </Container>
  );
};

export default IndexTechStackSection;
