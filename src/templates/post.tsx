import React from "react";
import styled from "styled-components";
import { PageContainer } from "../components/layouts/PageContainer";
import { Text } from "../components/texts/Text";

const Container = styled(PageContainer)``;

const Title = styled(Text)``;

const Content = styled(Text)``;

export default (props: any) => {
  const { post } = props.pageContext;
  return (
    <Container>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
    </Container>
  );
};
