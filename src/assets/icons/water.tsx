import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const WaterIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#4A90DA"
    />
    <Path
      d="M18.79 15.438a5.79 5.79 0 0 1-11.58 0C7.21 12.24 11.884 5.18 13 5.18s5.79 7.06 5.79 10.258Zm-5.08 1.93a3.047 3.047 0 0 1-2.818-4.2 3.453 3.453 0 1 0 5.358 2.879v-.04a3.048 3.048 0 0 1-2.54 1.36Z"
      fill="#fff"
    />
  </Svg>
);
