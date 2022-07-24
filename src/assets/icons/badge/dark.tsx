import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

export const DarkIcon = (props: SvgProps) => (
  <Svg width={55} height={25} fill="none" {...props}>
    <Rect width={55} height={25} rx={3} fill="#58575F" />
    <Path
      d="M25.05 8.545h2.983c1.258 0 2.238.37 2.942 1.107.707.739 1.06 1.774 1.06 3.106 0 1.336-.351 2.377-1.054 3.123-.704.746-1.686 1.119-2.948 1.119h-2.982V8.545Zm1.313 1.13v6.188h1.547c.899 0 1.586-.265 2.063-.797.48-.53.72-1.296.72-2.296 0-.997-.24-1.76-.72-2.291-.48-.536-1.168-.803-2.063-.803h-1.547Zm8.93 6.428c.445 0 .818-.134 1.12-.404.304-.273.456-.61.456-1.008v-.486l-1.517.094c-.38.027-.672.12-.88.281a.756.756 0 0 0-.304.633c0 .27.102.486.305.65.207.16.48.24.82.24Zm-.352 1.002c-.605 0-1.1-.171-1.482-.515-.379-.344-.568-.791-.568-1.342 0-.539.199-.967.597-1.283.399-.32.963-.5 1.694-.54l1.687-.099v-.474c0-.344-.11-.612-.328-.803-.219-.195-.521-.293-.908-.293-.36 0-.653.08-.88.24-.222.16-.362.381-.421.662h-1.195c.035-.57.281-1.035.738-1.394.457-.36 1.059-.54 1.805-.54s1.34.184 1.78.551c.446.368.669.86.669 1.477V17h-1.213v-1.014h-.03c-.175.34-.443.612-.802.815a2.266 2.266 0 0 1-1.143.305ZM39.36 17v-6.164h1.207v1.049h.03c.101-.36.283-.64.545-.844.261-.203.574-.305.937-.305.121 0 .266.016.434.047v1.178c-.114-.047-.303-.07-.569-.07-.406 0-.728.127-.966.38-.235.254-.352.6-.352 1.038V17h-1.266Zm5.262-3.521 2.49-2.643H48.6l-2.555 2.654L48.699 17h-1.47l-2.092-2.736-.528.521V17h-1.265V8.545h1.265v4.934h.012Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.73 18.267a5.73 5.73 0 1 0 .246-11.358c1.57 1.19 2.607 3.25 2.607 5.591 0 2.462-1.147 4.613-2.853 5.767ZM12.5 20a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      fill="#fff"
    />
  </Svg>
);
