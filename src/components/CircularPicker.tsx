import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { colors } from "../styles/colors";
import { Button } from "./buttons/Button";
import { XEIcon } from "./XEIcon";

type IPickerItemProps = JSX.Element;

interface IProps {
  classNames?: string;
  children: IPickerItemProps | IPickerItemProps[];
  translateZ: number;
  itemWidth: number;
  itemHeight: number;
  onItemChange: (index: number) => void;
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Scene = styled.div<{ width: number; height: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  perspective: 1000px;
`;

const Carousel = styled.div<{ translateZ: number; rotateY: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateZ(-${props => props.translateZ}px)
    rotateY(${props => props.rotateY}deg);
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const PickerItem = styled.div<{
  translateZ: number;
  rotateY: number;
  isFocused: boolean;
}>`
  position: absolute;
  transition-property: opacity;
  transition: 1s;
  transform: rotateY(${props => props.rotateY}deg)
    translateZ(${props => props.translateZ}px);
  opacity: ${props => (props.isFocused ? 1 : 0.4)};
`;

const PickerButton = styled(Button)`
  font-size: 36px;
  color: ${colors.gray450};
  transition-property: color, background-color;
  background-color: transparent;
  &:hover {
    color: ${colors.gray900};
  }
`;

const LeftIcon = styled(XEIcon).attrs({ type: "xi-angle-left" })``;

const RightIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })``;

function Picker({
  children,
  translateZ,
  itemWidth,
  itemHeight,
  onItemChange,
  ...props
}: IProps) {
  const [length, setLength] = useState(1);
  const [position, setPosition] = useState(0);

  const navigateNext = useCallback(() => {
    setPosition(position + 1);
  }, [position]);

  const navigatePrev = useCallback(() => {
    setPosition(position - 1);
  }, [position]);

  useEffect(() => {
    setLength(_.isArray(children) ? children.length : 1);
  }, []);

  useEffect(() => {
    onItemChange(mod(position, length));
  }, [position]);

  const childrenArray = _.isArray(children) ? children : [children];
  return (
    <Container {...props}>
      <PickerButton onClick={navigatePrev}>
        <LeftIcon />
      </PickerButton>
      <Scene width={itemWidth} height={itemHeight}>
        <Carousel translateZ={translateZ} rotateY={(position / length) * -360}>
          {childrenArray.map((child, index) => (
            <PickerItem
              key={index}
              translateZ={translateZ}
              rotateY={(360 / length) * index}
              isFocused={index === mod(position, length)}
            >
              {child}
            </PickerItem>
          ))}
        </Carousel>
      </Scene>
      <PickerButton onClick={navigateNext}>
        <RightIcon />
      </PickerButton>
    </Container>
  );
}

export const CircularPicker = Picker;
