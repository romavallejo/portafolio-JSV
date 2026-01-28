export const colorMap = {
  blue: { text: "text-blue", bg: "bg-blue" },
  red: { text: "text-red", bg: "bg-red" },
  "red-light": { text: "text-red-light", bg: "bg-red-light" },
  green: { text: "text-green", bg: "bg-green" },
  brown: { text: "text-brown", bg: "bg-brown" },
  grey: { text: "text-grey", bg: "bg-grey" },
  yellow: { text: "text-yellow", bg: "bg-yellow" },
  orange: { text: "text-orange", bg: "bg-orange" },
} as const;

export type ColorName = keyof typeof colorMap;
