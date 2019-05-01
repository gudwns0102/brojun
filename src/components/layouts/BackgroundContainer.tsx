import React from "react";
import styled from "styled-components";

interface IProps {
  children?: any;
  className?: string;
  backgroundImage?: string;
}

const Container = styled.div<{ backgroundImage?: IPost["backgroundImage"] }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    background-image: url("${props => props.backgroundImage}");
    background-size: cover;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.8;
  }
`;

export function BackgroundContainer(props: IProps) {
  return <Container {...props} />;
}
