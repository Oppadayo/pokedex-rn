import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const FairyIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#ED6EC7"
    />
    <Path
      d="m22.547 13-5.078-2.775.703-2.403-2.397.71L13 3.452l-2.775 5.078-2.403-.709.71 2.403L3.452 13l5.078 2.775-.709 2.403 2.403-.71L13 22.548l2.775-5.078 2.403.703-.71-2.397L22.548 13Zm-8.182 1.365L13 16.859l-1.365-2.494L9.141 13l2.494-1.365L13 9.141l1.365 2.494L16.859 13l-2.494 1.365Z"
      fill="#fff"
    />
  </Svg>
);
