import React from "react";
import styled from "styled-components";
import { PageContainer } from "../components/layouts/PageContainer";
import { Text } from "../components/texts/Text";
import { colors } from "../styles/colors";

const Container = styled(PageContainer)``;

const Header = styled.div<{ backgroundImage?: IPost["backgroundImage"] }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 360px;

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
