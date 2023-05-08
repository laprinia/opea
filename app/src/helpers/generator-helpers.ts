const convertHexToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
export const getReadableColor = (hex: string): string => {
  const rgb = convertHexToRGB(hex);
  if (rgb) {
    const luminance = 0.2126 * rgb["r"] + 0.7152 * rgb["g"] + 0.0722 * rgb["b"];
    return luminance < 140 ? "#ffffff" : "#000000";
  }
  return "#ffffff";
};
