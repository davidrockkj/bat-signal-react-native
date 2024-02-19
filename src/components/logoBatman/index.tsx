import React from 'react';
import { View, Image } from 'react-native';

import logoDoBatman from '../../assets/batman.png';

export default function logoBatman() {
  return (
    <View>
      <Image
        source={logoDoBatman} 
        style={{ width: 250, height: 200 }}
      />
    </View>
  );
}