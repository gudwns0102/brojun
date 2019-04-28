import React, { CSSProperties, useCallback } from "react";
import styled from "styled-components";

import { navigate } from "gatsby";
import MediaQuery from "react-responsive";
import avatar from "../../images/avatar.png";
import githubLogo from "../../images/github-logo.svg";
import { colors } from "../../styles/colors";
import { MediaQuerySize } from "../../utils/mediaQuerySizes";
import { Button } from "../buttons/Button";
import { Text } from "../texts/Text";
import { Bold } from "../texts/Typographies";

interface IProps {
  className?: string;
  style?: CSSProperties;
  scrollPercent: number;
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  padding: 8px 32px;
  margin: 0;
  background-color: ${colors.white};
  box-sizing: border-box;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const HomeButton = styled(Button)`
  background-color: transparent;
`;

const Avatar = styled.img.attrs({ src: avatar })`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 8px;
`;

const Title = styled(Bold)`
  font-size: 24px;
`;

const SpaceConsumer = styled.div`
  flex: 1;
`;

const GithubButton = styled(Button)`
  background-color: transparent;
`;

const GithubText = styled(Text).attrs({ fontType: "light" })`
  font-size: 18px;
  margin-right: 8px;
`;

const GithubLogo = styled.img.attrs({ src: githubLogo })`
  width: 36px;
  height: 36px;
`;

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${colors.gray300};
`;

const ProgressBar = styled.div<{ percent: number }>`
  position: absolute;
  bottom: 0;
  width: ${props => props.percent}%;
  height: 2px;
  background-color: ${colors.blue500};
`;

export function HeaderNavBar({ scrollPercent, ...props }: IProps) {
  const navigateToHome = useCallback(() => {
    navigate("/");
  }, []);

  const navigateToGithub = useCallback(() => {
    if (typeof window !== "undefined") {
      window.location.href = "https://github.com/gudwns0102/brojun";
    }
  }, []);

  return (
    <MediaQuery minWidth={MediaQuerySize.small}>
      {matches => (
        <Container
          {...props}
          style={{
            padding: matches ? "0" : "0",
            height: matches ? 72 : 54
          }}
        >
          <HomeButton>
            <Avatar />
            <Title onClick={navigateToHome}>Brojun</Title>
          </HomeButton>
          <SpaceConsumer />
          <GithubButton onClick={navigateToGithub}>
            {matches ? <GithubText>Github</GithubText> : null}
            <GithubLogo />
          </GithubButton>
          <ProgressContainer>
            <ProgressBar percent={scrollPercent} />
          </ProgressContainer>
        </Container>
      )}
    </MediaQuery>
  );
}
