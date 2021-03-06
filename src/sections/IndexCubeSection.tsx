import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { Bold, Cube, SEO } from "../components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const Content = styled(Bold)<{ show: boolean }>`
  display: block;
  position: absolute;
  top: 10%;
  font-size: 64px;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 1s;
`;

const StyledCube = styled(Cube).attrs({ edge: 200 })``;

const data = ["front", "back", "left", "right", "top", "bottom"];

export const IndexCubeSection = () => {
  const [title, setTitle] = useState(data[0]);
  const [showTitle, setShowTitle] = useState(true);
  const onSpinStart = useCallback(() => {
    setShowTitle(false);
  }, []);
  const onSpinEnd = useCallback((index: number) => {
    setShowTitle(true);
    setTitle(data[index]);
  }, []);

  return (
    <Container>
      <Content show={showTitle}>{title}</Content>
      <StyledCube data={data} onSpinStart={onSpinStart} onSpinEnd={onSpinEnd} />
    </Container>
  );
};
