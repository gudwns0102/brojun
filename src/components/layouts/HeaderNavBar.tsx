import React, { useCallback } from "react";
import styled from "styled-components";

import MediaQuery from "react-responsive";
import githubLogo from "../../images/github-logo.svg";
import { colors } from "../../styles/colors";
import { MediaQuerySize } from "../../utils/mediaQuerySizes";
import { Button } from "../buttons/Button";
import { Text } from "../texts/Text";

const Container = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 8px;
  margin: 0;
  background-color: ${colors.white};
  box-sizing: border-box;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;

const SpaceConsumer = styled.div`
  flex: 1;
`;

const GithubButton = styled(Button)``;

const GithubLogo = styled.img.attrs({ src: githubLogo })`
  width: 36px;
  height: 36px;
`;

export function HeaderNavBar() {
  const navigateToGithub = useCallback(() => {
    if (typeof window !== "undefined") {
      window.location.href = "https://github.com/gudwns0102/brojun";
    }
  }, []);

  return (
    <MediaQuery minWidth={MediaQuerySize.small}>
      {matches => (
        <Container>
          <SpaceConsumer />
          {matches ? <Text>Github</Text> : null}
          <GithubButton onClick={navigateToGithub}>
            <GithubLogo />
          </GithubButton>
        </Container>
      )}
    </MediaQuery>
  );
}
