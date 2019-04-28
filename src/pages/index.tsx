import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { TopMoveButton } from "../components/buttons/TopMoveButton";
import { HeaderNavBar } from "../components/layouts/HeaderNavBar";
import IndexCubeSection from "../sections/IndexCubeSection";
import { IndexHireMeSection } from "../sections/IndexHireMeSection";
import IndexTechStackSection from "../sections/IndexTechStackSection";

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
      <StyledHeaderNavBar scrollPercent={progress} />
      <IndexCubeSection />
      <IndexTechStackSection />
      <IndexHireMeSection />
    </Container>
  );
};

export default IndexPage;
