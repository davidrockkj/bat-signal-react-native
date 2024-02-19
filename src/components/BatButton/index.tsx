import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './styles';

export default function BatButton() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
    </View>
  );
}