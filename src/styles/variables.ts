export const colors = {
  darkGray: '#141312',
  white: '#FDFDFD',
  black: '#1A1A1A',
  primary: '#1575C5',
};

const customMediaQuery = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

export const media = {
  xs: customMediaQuery(480),
  sm: customMediaQuery(768),
  md: customMediaQuery(992),
  lg: customMediaQuery(1200),
  xl: customMediaQuery(1400),
};
