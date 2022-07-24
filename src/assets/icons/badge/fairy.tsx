import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

export const FairyIcon = (props: SvgProps) => (
  <Svg width={55} height={25} fill="none" {...props}>
    <Rect width={55} height={25} rx={3} fill="#ED6EC7" />
    <Path
      d="M27.14 17h-1.312V8.545h5.28v1.13H27.14v2.678h3.632v1.108h-3.632V17Zm6.75-.896c.446 0 .819-.135 1.12-.405.305-.273.457-.61.457-1.008v-.486l-1.518.094c-.379.027-.672.12-.879.281a.757.757 0 0 0-.304.633c0 .27.101.486.304.65.207.16.48.24.82.24Zm-.35 1.002c-.606 0-1.1-.172-1.483-.516-.38-.344-.569-.791-.569-1.342 0-.539.2-.967.598-1.283.398-.32.963-.5 1.693-.54l1.688-.099v-.474c0-.344-.11-.612-.328-.803-.22-.195-.522-.293-.909-.293-.359 0-.652.08-.878.24-.223.16-.364.381-.422.662h-1.196c.035-.57.282-1.035.739-1.394.457-.36 1.058-.54 1.804-.54s1.34.184 1.782.551c.445.368.668.86.668 1.477V17h-1.213v-1.014h-.03c-.175.34-.443.612-.802.815a2.266 2.266 0 0 1-1.143.305ZM37.997 17v-6.164h1.266V17h-1.266Zm1.154-7.277a.72.72 0 0 1-.521.21.72.72 0 0 1-.733-.72.72.72 0 0 1 .732-.727c.208 0 .382.07.522.211.145.14.217.313.217.516 0 .2-.072.369-.217.51ZM40.56 17v-6.164h1.207v1.049h.029c.102-.36.283-.64.545-.844.262-.203.574-.305.937-.305.121 0 .266.016.434.047v1.178c-.113-.047-.303-.07-.568-.07-.407 0-.729.127-.967.38-.235.254-.352.6-.352 1.038V17H40.56Zm4.547 2.297c-.239 0-.41-.01-.516-.03v-1.025c.062.016.2.024.41.024.297 0 .53-.069.697-.205.168-.133.301-.358.399-.674 0-.004.02-.069.058-.194l.053-.187-2.227-6.17h1.372l1.564 5.016h.018l1.564-5.016h1.336l-2.315 6.486c-.261.746-.568 1.262-.92 1.547-.351.285-.849.428-1.493.428Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.01 16.894 2.406-.697 2.078 3.8c.002.004.01.004.012 0l2.078-3.8 2.406.697c.006.002.01-.003.01-.009l-.699-2.358 3.695-2.02a.007.007 0 0 0 0-.013l-3.725-2.038.728-2.461c.002-.005-.003-.01-.009-.009l-2.462.714-2.022-3.696a.007.007 0 0 0-.012 0L11.472 8.7 9.01 7.986a.007.007 0 0 0-.01.009l.73 2.461-3.726 2.038a.007.007 0 0 0 0 .012l3.695 2.021L9 16.885a.007.007 0 0 0 .009.01Zm1.867-4.368 1.704.932.932 1.705c.003.005.01.005.013 0l.932-1.705 1.705-.932a.007.007 0 0 0 0-.013l-1.705-.932-.932-1.704a.007.007 0 0 0-.013 0l-.932 1.704-1.704.932a.007.007 0 0 0 0 .013Z"
      fill="#fff"
    />
  </Svg>
);