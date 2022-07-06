import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const DarkIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#58575F"
    />
    <Path
      d="M19.53 13a6.396 6.396 0 0 1-8.482 6.05 6.399 6.399 0 0 0 0-12.1A6.396 6.396 0 0 1 19.53 13ZM13 4.875a8.125 8.125 0 1 0 0 16.25 8.125 8.125 0 0 0 0-16.25Z"
      fill="#fff"
    />
  </Svg>
);
