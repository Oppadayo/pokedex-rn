import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const NormalIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#9DA0AA"
    />
    <Path
      d="M13 21.125a8.125 8.125 0 1 1 0-16.25 8.125 8.125 0 0 1 0 16.25Zm0-13a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75Z"
      fill="#fff"
    />
  </Svg>
);
