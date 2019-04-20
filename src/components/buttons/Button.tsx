import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { FontType, fontTypeToWeight } from "../texts/Text";

type ButtonChildType = string | number | JSX.Element;

interface IButtonProps
  extends RemoveKeys<
    React.HTMLProps<HTMLButtonElement>,
    ["ref", "as", "type"]
  > {
  children?: ButtonChildType | ButtonChildType[];
  fontType?: FontType;
}

const StyledButton = styled.button<{ fontType: FontType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: ${props => fontTypeToWeight.get(props.fontType)};

  border: 0px solid;
  border-radius: 4px;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  line-height: 1.5;
  letter-spacing: -0.5;
  background-color: ${colors.white};
  transition-duration: 0.4s;
  transition-property: transform, box-shadow, background-color;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${colors.gray200};
    cursor: default;
  }
`;

export function Button({
  children,
  fontType = "regular",
  ...props
}: IButtonProps) {
  const childArray = _.isArray(children) ? children : [children];
  return (
    <StyledButton {...props} fontType={fontType}>
      {childArray}
    </StyledButton>
  );
}
