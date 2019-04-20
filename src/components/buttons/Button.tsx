import _ from "lodash";
import React from "react";
import styled from "styled-components";

type ButtonChildType = string | number | JSX.Element;

interface IButtonProps {
  children?: ButtonChildType | ButtonChildType[];
}

const StyledButton = styled.button``;

export function Button({ children }: IButtonProps) {
  const childArray = _.isArray(children) ? children : [children];
  return <StyledButton>{childArray}</StyledButton>;
}
