import React, { useCallback } from "react";
import styled from "styled-components";

import githubLogo from "../../images/github-logo.svg";
import { colors } from "../../styles/colors";
import { Button } from "../buttons/Button";

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
    <Container>
      <GithubButton onClick={navigateToGithub}>
        <GithubLogo />
      </GithubButton>
    </Container>
  );
}
