export const heading = (variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
  if (variant === 'h1') {
    return 100;
  } else if (variant === 'h2') {
    return 32;
  } else if (variant === 'h3') {
    return 26;
  } else if (variant === 'h4') {
    return 16;
  } else if (variant === 'h5') {
    return 16;
  } else if (variant === 'h6') {
    return 12;
  }
};
