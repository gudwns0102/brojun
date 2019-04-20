import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import { Text } from "../../../src/components/texts/Text";
import { CenterDecorator } from "../../decorators/CenterDecorator";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Pane = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlockText = styled(Text)`
  display: block;
  font-size: 40px;
`;

storiesOf("Text", module)
  .addDecorator(CenterDecorator)
  .add("font types", () => (
    <>
      <BlockText>Noto Sans KR</BlockText>
      <BlockText type="light">서체를 확인해보세요</BlockText>
      <Container>
        <Pane>
          <BlockText type="thin">100 얇은 서체</BlockText>
          <BlockText type="light">300 가벼운 서체</BlockText>
          <BlockText type="regular">400 일반 서체</BlockText>
          <BlockText type="medium">500 중간 서체</BlockText>
          <BlockText type="bold">700 굵은 서체</BlockText>
          <BlockText type="black">900 두꺼운 서체</BlockText>
        </Pane>
        <Pane>
          <BlockText type="thin">100 thin</BlockText>
          <BlockText type="light">300 light</BlockText>
          <BlockText type="regular">400 regular</BlockText>
          <BlockText type="medium">500 medium</BlockText>
          <BlockText type="bold">700 bold</BlockText>
          <BlockText type="black">900 black</BlockText>
        </Pane>
      </Container>
    </>
  ));
