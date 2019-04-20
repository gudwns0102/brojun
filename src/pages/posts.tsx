import React from "react";
import styled from "styled-components";

import { Button } from "../components/buttons/Button";
import { PageContainer } from "../components/layouts/PageContainer";
import { Text } from "../components/texts/Text";

const Container = styled(PageContainer)``;

export default () => {
  return (
    <Container>
      <Text>posts</Text>
      <Button />
    </Container>
  );
};
