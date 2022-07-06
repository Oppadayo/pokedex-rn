import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ElectricIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#EED535"
    />
    <Path
      d="M8.734 5.89h6.297l2.64 8.329-4.062-.203 2.438 6.906-9.75-10.055h4.672L8.734 5.891Z"
      fill="#fff"
    />
  </Svg>
);
