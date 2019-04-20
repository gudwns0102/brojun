import React from "react";

import { Button } from "../components/buttons/Button";
import { PageContainer } from "../components/layouts/PageContainer";
import SEO from "../components/seo";

const IndexPage = () => (
  <PageContainer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Button>test</Button>
  </PageContainer>
);

export default IndexPage;
