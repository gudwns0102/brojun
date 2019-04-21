import _ from "lodash";
import React, { CSSProperties, useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "./buttons/Button";
import { CubePane } from "./CubePane";
import XEIcon from "./XEIcon";

type CubePaneType = "front" | "back" | "left" | "right" | "top" | "bottom";

export interface ICubeProps {
  edge: number;
  className?: string;
  style?: CSSProperties;
  data: string[];
  onSpinStart?: () => any;
  onSpinEnd?: (index: number) => any;
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

const RefreshButton = styled(Button)`
  position: absolute;
  top: -30px;
  right: -30px;
`;
const RefreshIcon = styled(XEIcon).attrs({ type: "xi-refresh" })`
  font-size: 24px;
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

export function Cube({ data, edge, ...props }: ICubeProps) {
  const [translateZ] = useState(edge / 2);
  const [spinable, setSpinable] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const startSpin = useCallback(() => {
    setSpinable(true);
    _.invoke(props, ["onSpinStart"]);
  }, []);

  const stopSpin = useCallback(() => {
    const { index } = calculateLargestPane(rotateX, rotateY);
    setSpinable(false);
    _.invoke(props, ["onSpinEnd"], index);
  }, [rotateX, rotateY]);

  const calculateLargestPane = useCallback(
    ($rotateX: number, $rotateY: number) => {
      const frontArea = getFrontArea($rotateX, $rotateY);
      const backArea = getBackArea($rotateX, $rotateY);
      const leftArea = getLeftArea($rotateX, $rotateY);
      const rightArea = getRightArea($rotateX, $rotateY);
      const topArea = getTopArea($rotateX, $rotateY);
      const bottomArea = getBottomArea($rotateX, $rotateY);

      const results = [
        frontArea,
        backArea,
        leftArea,
        rightArea,
        topArea,
        bottomArea
      ];

      return results.reduce(
        ($max: any, current: any, index) => {
          return current > $max.area ? { area: current, index } : $max;
        },
        { area: 0, index: -1 }
      );
    },
    []
  );
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (spinable) {
        setRotateX(rotateX - e.movementY / 2);
        setRotateY(rotateY - e.movementX / 2);
      }
    },
    [rotateX, rotateY, spinable]
  );

  const onRefresh = useCallback(() => {
    const { index } = calculateLargestPane(0, 0);
    setRotateX(0);
    setRotateY(0);
    _.invoke(props, ["onSpinEnd"], index);
  }, []);

  return (
    <Scene {...props} edge={edge}>
      {rotateX || rotateY ? (
        <RefreshButton onClick={onRefresh}>
          <RefreshIcon />
        </RefreshButton>
      ) : null}
      <Container
        rotateX={rotateX}
        rotateY={rotateY}
        onMouseDown={startSpin}
        onMouseUp={stopSpin}
        onMouseLeave={stopSpin}
        onMouseMove={onMouseMove}
      >
        <Front translateZ={translateZ}>{data[0]}</Front>
        <Back translateZ={translateZ}>{data[1]}</Back>
        <Left translateZ={translateZ}>{data[2]}</Left>
        <Right translateZ={translateZ}>{data[3]}</Right>
        <Top translateZ={translateZ}>{data[4]}</Top>
        <Bottom translateZ={translateZ}>{data[5]}</Bottom>
      </Container>
    </Scene>
  );
}
