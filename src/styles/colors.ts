// tslint:disable:object-literal-sort-keys
export const colors = {
  beige20: "#fef1e6",
  beige50: "#fde8d5",
  beige200: "#f7d7bc",
  beige500: "#f0c09a",
  beige700: "#eaaa77",
  beige800: "#b1703c",
  blue20: "#ebf3ff",
  blue50: "#cce0ff",
  blue300: "#82adf0",
  blue500: "#2e76e6",
  blue550: "#0050cc",
  blue700: "#003890",
  cyan20: "#e7f0f2",
  cyan30: "#b2d0d5",
  cyan40: "#8db9c1",
  cyan50: "#5396a1",
  cyan200: "#287987",
  cyan500: "#105b68",
  cyan700: "#0b444e",
  white: "#ffffff",
  gray20: "#fafafa",
  gray50: "#f5f5f5",
  gray100: "#f0f0f0",
  gray200: "#eaeaea",
  gray300: "#e2e2e2",
  gray400: "#d5d5d5",
  gray450: "#aaaaaa",
  gray500: "#909090",
  gray700: "#555555",
  gray900: "#212121",
  black: "#000000",
  orange20: "#ffeacc",
  orange50: "#ffd599",
  orange300: "#ffb44c",
  orange500: "#ff9500",
  orange520: "#ed8b02",
  orange550: "#ff7d00",
  orange700: "#ff6d1f"
};

export const hexToRgba = (hex: string, opacity: number) => {
  const trimHex = hex.replace("#", "");
  const bigint = parseInt(trimHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${[r, g, b, opacity].join()})`;
};
