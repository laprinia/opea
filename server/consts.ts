export const ColorFormatsArray = ["RGB", "HSL", "HSV", "CMYK"] as const;
export type ColorFormats = (typeof ColorFormatsArray)[number];
export const ColorOutputsArray = [
  "HEX",
  "HTML",
  "GLSL",
  "Java RGB",
  "SwiftUI RGB",
  "Android sRGB",
] as const;
export type ColorOutputs = (typeof ColorOutputsArray)[number];
export const JWT_MAX_AGE = 3 * 24 * 60 * 60;
