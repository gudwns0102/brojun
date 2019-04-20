import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";

const req = require.context("../stories", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const GlobalStyle = createGlobalStyle`
  @import url("//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css");
  * {
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900');
  }
`;

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(loadStories, module);
