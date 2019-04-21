import { navigate } from "@reach/router";
import _ from "lodash";
import React, { CSSProperties, useCallback, useState } from "react";
import styled from "styled-components";
import { CubePane } from "./CubePane";

type CubePaneType = "front" | "back" | "left" | "right" | "top" | "bottom";

export interface ICubeProps {
  edge: number;
  className?: string;
  style?: CSSProperties;
  onSpinStart?: () => any;
  onSpinEnd?: () => any;
}

const Scene = styled.div<{ edge: number }>`
  position: relative;
  width: ${props => props.edge}px;
  height: ${props => props.edge}px;
  perspective: 500px;
`;

const Container = styled.div<{ rotateX: number; rotateY: number }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translateZ(-100px) rotateX(${props => props.rotateX}deg)
    rotateY(${props => props.rotateY}deg);
  transition: transform 1s;
`;

const Front = styled(CubePane)<{ translateZ: number }>`
  background-color: red;
  transform: rotateY(0deg) translateZ(${props => props.translateZ}px);
`;
const Back = styled(CubePane)<{ translateZ: number }>`
  background-color: orange;
  transform: rotateY(180deg) translateZ(${props => props.translateZ}px);
`;
const Left = styled(CubePane)<{ translateZ: number }>`
  background-color: yellow;
  transform: rotateY(-90deg) translateZ(${props => props.translateZ}px);
`;
const Right = styled(CubePane)<{ translateZ: number }>`
  background-color: green;
  transform: rotateY(90deg) translateZ(${props => props.translateZ}px);
`;
const Top = styled(CubePane)<{ translateZ: number }>`
  background-color: blue;
  transform: rotateX(90deg) translateZ(${props => props.translateZ}px);
`;
const Bottom = styled(CubePane)<{ translateZ: number }>`
  background-color: purple;
  transform: rotateX(-90deg) translateZ(${props => props.translateZ}px);
`;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function createGetVisibleAreaRatioFunc(
  initialRotateX: number,
  initialRotateY: number
) {
  return (rotateX: number, rotateY: number) =>
    getVisibleAreaRatio(initialRotateX + rotateX, initialRotateY + rotateY);
}

function getVisibleAreaRatio(rotateX: number, rotateY: number) {
  const edgeX = Math.cos((rotateX / 180) * Math.PI);
  const edgeY = Math.cos((rotateY / 180) * Math.PI);
  return edgeX * edgeY;
}

const getFrontArea = createGetVisibleAreaRatioFunc(0, 0);
const getBackArea = createGetVisibleAreaRatioFunc(0, 180);
const getLeftArea = createGetVisibleAreaRatioFunc(0, -90);
const getRightArea = createGetVisibleAreaRatioFunc(0, 90);
const getTopArea = createGetVisibleAreaRatioFunc(90, 0);
const getBottomArea = createGetVisibleAreaRatioFunc(-90, 0);

export function Cube({ edge, ...props }: ICubeProps) {
  const [translateZ] = useState(edge / 2);
  const [spinable, setSpinable] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const startSpin = useCallback(() => {
    _.invoke(props, ["onSpinStart"]);
    setSpinable(true);
  }, []);
  const stopSpin = useCallback(() => {
    _.invoke(props, ["onSpinEnd"]);
    setSpinable(false);
  }, [rotateX, rotateY]);
  const calculateLargestPane = useCallback(() => {
    const frontArea = getFrontArea(rotateX, rotateY);
    const backArea = getBackArea(rotateX, rotateY);
    const leftArea = getLeftArea(rotateX, rotateY);
    const rightArea = getRightArea(rotateX, rotateY);
    const topArea = getTopArea(rotateX, rotateY);
    const bottomArea = getBottomArea(rotateX, rotateY);
  }, [rotateX, rotateY]);
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (spinable) {
        setRotateX(rotateX - e.movementY / 2);
        setRotateY(rotateY - e.movementX / 2);
      }
    },
    [rotateX, rotateY, spinable]
  );

  return (
    <Scene {...props} edge={edge}>
      <Container
        rotateX={rotateX}
        rotateY={rotateY}
        onMouseDown={startSpin}
        onMouseUp={stopSpin}
        onMouseLeave={stopSpin}
        onMouseMove={onMouseMove}
      >
        <Front translateZ={translateZ}>김형준</Front>
        <Back translateZ={translateZ}>Back</Back>
        <Left translateZ={translateZ}>Left</Left>
        <Right translateZ={translateZ}>Right</Right>
        <Top translateZ={translateZ}>Blogging</Top>
        <Bottom translateZ={translateZ}>Bottom</Bottom>
      </Container>
    </Scene>
  );
}
