import React, { HTMLProps } from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";

export type FontType =
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "bold"
  | "black";

interface ITextProps
  extends RemoveKeys<HTMLProps<HTMLSpanElement>, ["ref", "as"]> {
  fontType?: FontType;
}

export const fontTypeToWeight = new Map<FontType, number | string>()
  .set("thin", 100)
  .set("light", 300)
  .set("regular", 400)
  .set("medium", 500)
  .set("bold", 700)
  .set("black", 900);

const StyledText = styled.span<{ fontType: FontType }>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: ${props => fontTypeToWeight.get(props.fontType)};
  color: ${colors.black};
`;

export function Text({ fontType = "regular", ...props }: ITextProps) {
  return <StyledText {...props} fontType={fontType} />;
}
