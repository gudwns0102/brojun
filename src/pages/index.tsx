import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { HeaderNavBar, SEO } from "../components";
import {
  IndexCubeSection,
  IndexHireMeSection,
  IndexTechStackSection
} from "../sections";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const StyledHeaderNavBar = styled(HeaderNavBar)`
  position: fixed;
  box-shadow: 0px 0px 0px transparent;
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
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <StyledHeaderNavBar scrollPercent={progress} />
      <IndexCubeSection />
      <IndexTechStackSection />
      <IndexHireMeSection />
    </Container>
  );
};

export default IndexPage;
