import React from 'react';
import {Text} from 'react-native';

interface Props {
  children: string | number | string[] | number[] | undefined;
  color: string;

  style?: any;

  variant:
    | 'title'
    | 'appTitle'
    | 'name'
    | 'filter'
    | 'description'
    | 'number'
    | 'type';
}

export function Heading({children, color, variant, style}: Props) {
  function heading(
    typo:
      | 'title'
      | 'appTitle'
      | 'name'
      | 'filter'
      | 'description'
      | 'number'
      | 'type',
  ) {
    switch (typo) {
      case 'title':
        return {fontSize: 150, fontWeight: '700'};
      case 'appTitle':
        return {fontSize: 32, fontWeight: '700'};
      case 'name':
        return {fontSize: 26, fontWeight: '700'};
      case 'filter':
        return {fontSize: 16, fontWeight: '700'};
      case 'description':
        return {fontSize: 16, fontWeight: '400'};
      case 'number':
        return {fontSize: 12, fontWeight: '700'};
      case 'type':
        return {fontSize: 12, fontWeight: '500'};
    }
  }

  return (
    <Text
      style={{
        color: color,
        ...heading(variant),
        ...style,
      }}>
      {children}
    </Text>
  );
}
