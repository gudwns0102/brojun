import _ from "lodash";
import React, { CSSProperties } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { MediaQuerySize } from "../../utils/mediaQuerySizes";
import { PostSummaryCard } from "../cards/PostSummaryCard";

interface IProps {
  posts: IPost[];
  cardStyle?: CSSProperties;
  onCardClick?: (index: number) => void;
}

const Container = styled.div<{ isSmall: boolean }>`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(${props => (props.isSmall ? 2 : 3)}, 1fr);
  grid-gap: 10px;
`;

const StyledPostSummaryCard = styled(PostSummaryCard)``;

export function PostSummaryList({ posts, onCardClick, cardStyle }: IProps) {
  return (
    <MediaQuery maxWidth={MediaQuerySize.medium}>
      {matches => {
        return (
          <Container isSmall={matches}>
            {onCardClick
              ? posts.map(post => (
                  <StyledPostSummaryCard
                    key={post.id}
                    post={post}
                    style={cardStyle}
                    onClick={_.partial(onCardClick, post.id)}
                  />
                ))
              : posts.map(post => (
                  <StyledPostSummaryCard
                    key={post.id}
                    post={post}
                    style={cardStyle}
                  />
                ))}
          </Container>
        );
      }}
    </MediaQuery>
  );
}
