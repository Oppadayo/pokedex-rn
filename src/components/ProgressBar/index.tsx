import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface Props {
  width: string | number;
  borderColor: string;
}

export function ProgressBar({width, borderColor}: Props) {
  return (
    <View style={styles.container}>
      <View style={{...styles.progressBar, width, borderColor}} />
    </View>
  );
}
