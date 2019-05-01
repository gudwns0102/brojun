import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import { HeaderNavBar, SEO } from "../components";
import {
  IndexCubeSection,
  IndexHeaderSection,
  IndexHireMeSection,
  IndexTechStackSection
} from "../sections";
import { colors, hexToRgba } from "../styles/colors";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const StyledHeaderNavBar = styled(HeaderNavBar)`
  position: fixed;
  min-width: auto;
  box-shadow: 0px 0px 0px transparent;
  background-color: ${hexToRgba(colors.white, 0.6)};
`;

const IndexPage = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<any>();
  const onContainerScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    // setProgress(
    //   (e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)) * 100
    // );
  }, []);

  return (
    <Container ref={containerRef} onScroll={onContainerScroll}>
      <StyledHeaderNavBar scrollPercent={progress} />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <IndexHeaderSection />
      <IndexCubeSection />
      <IndexTechStackSection />
      <IndexHireMeSection />
    </Container>
  );
};

export default IndexPage;
