import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import LogoBatman from '../logoBatman';
import BatButton from '../BatButton';

export function BatHome(estilo: any, ...props: any[]) {
  return (
    <View style={[styles.container, estilo]}>
      <LogoBatman />
      <BatButton 
        buttonColor='#ffc321'
        buttonName='Ativar Bat-Sinal'
      />
    </View>
  );
}