import React from "react";
import styled from "styled-components";

const CenterView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const CenterDecorator = (storyFn: any) => (
  <CenterView>{storyFn()}</CenterView>
);
