import React, { useCallback } from "react";
import styled from "styled-components";

import { navigate } from "gatsby";
import { PageContainer } from "../components/layouts/PageContainer";
import { PostSummaryList } from "../components/lists/PostSummaryList";
import posts from "../data/posts.json";

const Container = styled(PageContainer).attrs({
  mainStyle: {
    padding: 16
  }
})``;

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
