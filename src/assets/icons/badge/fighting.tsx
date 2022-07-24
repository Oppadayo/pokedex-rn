import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

export const FightingIcon = (props: SvgProps) => (
  <Svg width={73} height={25} fill="none" {...props}>
    <Rect width={73} height={25} rx={3} fill="#D04164" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.587 6.247a1.655 1.655 0 0 1 2.99-.497h.483a1.655 1.655 0 0 1 2.705.5h.406a1.655 1.655 0 0 1 2.395.75h1.1c.01 0 .02.003.027.007A1.655 1.655 0 0 1 19.5 8.655v5.05c0 .03 0 .061-.003.091C19.398 17.238 16.303 20 12.5 20c-3.866 0-7-2.854-7-6.375 0-1.7.73-3.244 1.92-4.386-.002 1.656.026 3.37.155 3.34.345-.079.075-5.21.012-6.332Z"
      fill="#fff"
    />
    <Path
      d="M27.463 16.5H26.15V8.045h5.28v1.13h-3.967v2.678h3.633v1.108h-3.633V16.5Zm4.998 0v-6.164h1.266V16.5H32.46Zm1.154-7.277a.72.72 0 0 1-.521.21.72.72 0 0 1-.733-.72.72.72 0 0 1 .733-.727c.207 0 .38.07.521.211.145.14.217.313.217.516 0 .2-.072.369-.217.51Zm4.032 6.252c.496 0 .892-.188 1.189-.563.3-.375.451-.879.451-1.512 0-.632-.15-1.14-.451-1.523-.297-.383-.693-.574-1.19-.574-.488 0-.878.19-1.171.568-.29.379-.434.889-.434 1.53 0 .64.145 1.146.434 1.517.293.371.683.557 1.172.557Zm.011 3.345c-.718 0-1.328-.172-1.828-.515-.496-.344-.783-.785-.861-1.325h1.271c.09.258.266.465.528.622.265.156.578.234.937.234.488 0 .873-.129 1.154-.387.282-.254.422-.594.422-1.02v-1.013h-.023c-.176.34-.438.61-.785.809-.344.199-.733.298-1.166.298-.778 0-1.399-.28-1.864-.843-.465-.567-.697-1.328-.697-2.285 0-.97.232-1.737.697-2.303.47-.57 1.1-.856 1.893-.856.434 0 .822.104 1.166.31.344.204.61.485.797.845h.023v-1.055h1.23v6.053c0 .734-.263 1.322-.79 1.763-.524.446-1.225.668-2.104.668Zm4.195-2.32V8.045h1.254v3.322h.03c.172-.363.423-.642.756-.838.332-.199.73-.299 1.195-.299.672 0 1.2.207 1.582.622.387.414.58.972.58 1.675V16.5h-1.272v-3.727c0-.46-.115-.818-.345-1.072-.227-.254-.56-.38-1.002-.38-.465 0-.834.148-1.108.445-.27.293-.404.683-.404 1.171V16.5h-1.266Zm6.99-7.623h1.272v1.459h1.172v1.002h-1.172v3.398c0 .266.06.461.182.586.121.125.31.188.568.188.188 0 .326-.01.416-.03v1.002c-.156.04-.39.059-.703.059-.621 0-1.066-.127-1.336-.38-.265-.259-.398-.686-.398-1.284v-3.54h-.897v-1.001h.897V8.877Zm3.528 7.623v-6.164h1.266V16.5H52.37Zm1.154-7.277a.721.721 0 0 1-.521.21.721.721 0 0 1-.732-.72.721.721 0 0 1 .732-.727c.207 0 .38.07.521.211.145.14.217.313.217.516 0 .2-.072.369-.217.51Zm1.407 7.277v-6.164h1.207v1.031h.029c.172-.36.422-.639.75-.838.328-.199.725-.299 1.19-.299.675 0 1.2.204 1.576.61.375.402.562.959.562 1.67v3.99h-1.271v-3.744c0-.469-.112-.824-.334-1.066-.22-.247-.545-.37-.979-.37-.445 0-.8.145-1.066.434-.266.289-.399.674-.399 1.154V16.5h-1.265Zm9.164-1.025c.496 0 .892-.188 1.19-.563.3-.375.45-.879.45-1.512 0-.632-.15-1.14-.45-1.523-.298-.383-.694-.574-1.19-.574-.489 0-.88.19-1.172.568-.29.379-.434.889-.434 1.53 0 .64.145 1.146.434 1.517.293.371.683.557 1.172.557Zm.011 3.345c-.718 0-1.328-.172-1.828-.515-.496-.344-.783-.785-.861-1.325h1.272c.09.258.265.465.527.622.265.156.578.234.937.234.489 0 .873-.129 1.155-.387.28-.254.422-.594.422-1.02v-1.013h-.024c-.176.34-.438.61-.785.809-.344.199-.733.298-1.166.298-.778 0-1.399-.28-1.863-.843-.465-.567-.698-1.328-.698-2.285 0-.97.233-1.737.698-2.303.468-.57 1.1-.856 1.892-.856.434 0 .822.104 1.166.31.344.204.61.485.797.845h.023v-1.055h1.231v6.053c0 .734-.264 1.322-.791 1.763-.523.446-1.225.668-2.104.668Z"
      fill="#fff"
    />
  </Svg>
);