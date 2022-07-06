import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const GroundIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#DD7748"
    />
    <Path
      d="M18.078 6.5h-6.094L7.922 17.875H22.14L18.078 6.5ZM9.75 8.734H6.5l-3.25 9.141H6.5l3.25-9.14Z"
      fill="#fff"
    />
  </Svg>
);
