import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './styles';

type BatButton = {
  buttonName: string;
  buttonColor: string;
}

export default function BatButton({ buttonName, buttonColor }: BatButton) {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, {backgroundColor: buttonColor || 'black'}]}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </Pressable>
    </View>
  );
}