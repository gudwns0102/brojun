import React from "react";
import styled from "styled-components";

import { SEO } from "../components";

const Container = styled.div``;

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Container>
);

export default NotFoundPage;
