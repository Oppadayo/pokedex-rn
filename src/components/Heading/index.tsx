import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {heading} from '../../utils/theme';

interface Props {
  text: string | number;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({text, variant}: Props) {
  return <Text style={styles.heading}>{text}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,,
  },
});
