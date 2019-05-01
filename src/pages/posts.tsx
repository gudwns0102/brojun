import { navigate } from "gatsby";
import React, { useCallback } from "react";
import styled from "styled-components";

import { PostSummaryList } from "../components/";
import posts from "../data/posts.json";

const Container = styled.div.attrs({})``;

const StyledPostSummaryList = styled(PostSummaryList).attrs({
  cardStyle: {}
})``;

export default () => {
  const onCardClick = useCallback((postId: number) => {
    navigate(`/posts/${postId}`);
  }, []);

  return (
    <Container>
      <StyledPostSummaryList posts={posts} onCardClick={onCardClick} />
    </Container>
  );
};
