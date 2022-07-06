import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const RockIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#BAAB82"
    />
    <Path
      d="m19.297 6.906 2.031 6.297-2.64 3.25-1.829-2.844 2.438-6.703Zm-4.266 13.61 2.844-3.25-2.031-2.844-6.297 4.265 5.484 1.829Zm-4.469-13.61L4.875 13l.203 4.266 3.047 1.015 7.516-5.078 2.234-6.297h-7.313Z"
      fill="#fff"
    />
  </Svg>
);
