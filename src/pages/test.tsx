import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Item = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;

export default () => {
  return (
    <Container>
      <Item style={{ background: "pink" }} />
      <Item />
      <Item style={{ background: "pink" }} />
      <Item />
      <Item style={{ background: "pink" }} />
    </Container>
  );
};
