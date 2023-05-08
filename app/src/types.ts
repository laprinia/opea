const ColorFormatsArray = ["RGB", "HSL", "HSV", "CMYK"] as const;
export type ColorFormats = (typeof ColorFormatsArray)[number];
export interface ColorBlock {
  index: number;
  colorValue: string;
  colorFormat: ColorFormats;
}
