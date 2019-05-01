import React from "react";
import styled from "styled-components";

import { BackgroundContainer, Text } from "../components";
import { colors } from "../styles/colors";

const Container = styled.div``;

const Header = styled(BackgroundContainer)`
  height: 360px;
`;

const Title = styled(Text).attrs({ fontType: "bold" })`
  display: block;
  font-size: 48px;
  text-align: center;
  color: ${colors.gray20};
`;

const Subtitle = styled(Text).attrs({ fontType: "medium" })`
  display: block;
  font-size: 32px;
  text-align: center;
  color: ${colors.gray20};
`;

const Body = styled.div`
  padding: 16px;
`;

const Content = styled(Text).attrs({ fontType: "regular" })`
  font-size: 20px;
`;

export default (props: any) => {
  const { post }: { post: IPost } = props.pageContext;
  const { backgroundImage, title, content } = post;

  return (
    <Container>
      <Header backgroundImage={backgroundImage}>
        <Title>{title}</Title>
        <Subtitle>Subtitle</Subtitle>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
    </Container>
  );
};
