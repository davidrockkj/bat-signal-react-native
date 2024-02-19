import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import LogoBatman from '../logoBatman';
import BatButton from '../BatButton';

export function BatHome() {
  return (
    <View style={styles.container}>
      <LogoBatman />
      <BatButton />
    </View>
  );
}