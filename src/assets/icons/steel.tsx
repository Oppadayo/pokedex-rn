import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SteelIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#417D9A"
    />
    <Path
      d="M17.063 13a4.063 4.063 0 1 1-8.126 0 4.063 4.063 0 0 1 8.126 0Zm.355-7.652H8.582L4.164 13l4.418 7.652h8.836L21.836 13l-4.418-7.652Z"
      fill="#fff"
    />
  </Svg>
);
