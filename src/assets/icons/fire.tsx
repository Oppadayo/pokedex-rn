import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const FireIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
      fill="#FD7D24"
    />
    <Path
      d="M17.4 8.655c2.084 1.48 3.296 4.219 2.376 6.703-.865 2.342-3.284 3.807-5.722 3.876a2.843 2.843 0 1 0-3.475-3.984c-1.016 1.95.589 3.894 2.34 4.672 1.984.886 4.277.232 5.87-1.137-2.742 3.762-8.294 4.43-11.34.676-2.072-2.553-2.121-6.297-.238-9-.453 1.464-.102 2.945 1.117 3.758-1.219-2.438-.406-4.284 1.247-5.92.796-.788 1.81-1.088 2.64-1.777.915-.756 1.035-2.01.86-3.114a4.187 4.187 0 0 1 2.235 4.006c-2.31.01-3.157 3.223-1.122 4.367 1.983 1.121 4.284-1.109 3.212-3.126Z"
      fill="#fff"
    />
  </Svg>
);