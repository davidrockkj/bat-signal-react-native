import React from 'react';
import { styles } from './styles';
import { View, Image, ScrollView } from 'react-native';


import LogoBatman from '../../assets/batman.png';

export function BatForm() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoBatman} 
          style={{ width: 100, height: 100 }}
        />
      </View>
    </ScrollView>
  );
}