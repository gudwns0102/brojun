import React, { useState } from "react";
import styled from "styled-components";

import MediaQuery from "react-responsive";
import {
  BackgroundContainer,
  CircularPicker,
  DynamicText
} from "../components";
import js from "../images/javascript-logo.png";
import jest from "../images/jest-logo.png";
import nightwatch from "../images/nightwatch-logo.png";
import react from "../images/react-logo.png";
import ts from "../images/typescript-logo.png";
import { MediaQuerySize } from "../utils/mediaQuerySizes";

const techData = [
  {
    name: "Javascript",
    image: js
  },
  {
    name: "Typescript",
    image: ts
  },
  {
    name: "React",
    image: react
  },
  {
    name: "Jest",
    image: jest
  },
  {
    name: "Nightwatch",
    image: nightwatch
  }
];

const Container = styled(BackgroundContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const TechImage = styled.img`
  width: 30%;
`;

const Picker = styled(CircularPicker)<{ width: number | string }>`
  position: absolute;
  bottom: 10%;
`;

const PickerItem = styled.img.attrs({ draggable: false })`
  width: 100%;
  height: 100%;
`;

export const IndexTechStackSection = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const currentTechData = techData[currentItemIndex];

  return (
    <MediaQuery minWidth={MediaQuerySize.small}>
      {matches => (
        <Container>
          <TechImage src={currentTechData.image} />
          <DynamicText>{currentTechData.name}</DynamicText>
          <Picker
            width={matches ? "800px" : "400px"}
            translateZ={matches ? 300 : 100}
            itemWidth={matches ? 100 : 50}
            itemHeight={matches ? 100 : 50}
            onItemChange={setCurrentItemIndex}
          >
            {techData.map(data => (
              <PickerItem src={data.image} />
            ))}
          </Picker>
        </Container>
      )}
    </MediaQuery>
  );
};
