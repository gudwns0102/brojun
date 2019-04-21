import React, { CSSProperties } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BackgroundContainer } from "../BackgroundContainer";
import { Medium } from "../texts/Typographies";

interface IProps {
  post: IPost;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Container = styled(BackgroundContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 16px;
  border-radius: 8px;

  cursor: pointer;
`;

const Title = styled(Medium)`
  font-size: 20px;
  text-align: center;
  color: ${colors.gray20};
`;

export function PostSummaryCard({ post, ...props }: IProps) {
  return (
    <Container {...props} backgroundImage={post.backgroundImage}>
      <Title>{post.title}</Title>
    </Container>
  );
}
