import React, { CSSProperties } from "react";
import styled from "styled-components";

type FontType = "thin" | "light" | "regular" | "medium" | "bold" | "black";

interface ITextProps {
  children?: string;
  className?: string;
  style?: CSSProperties;
  type?: FontType;
}

const fontTypeToWeight = new Map<FontType, number | string>()
  .set("thin", 100)
  .set("light", 300)
  .set("regular", 400)
  .set("medium", 500)
  .set("bold", 700)
  .set("black", 900);

const StyledText = styled.span<{ type: FontType }>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: ${props => fontTypeToWeight.get(props.type)};
`;

export function Text({ type = "regular", ...props }: ITextProps) {
  return <StyledText {...props} type={type} />;
}
