import React, { Component } from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  type: string;
}

const Container = styled.i``;

class XEIcon extends Component<IProps> {
  public render() {
    const { className, type } = this.props;
    return <Container className={`${className} ${type}`} />;
  }
}

export default XEIcon;
