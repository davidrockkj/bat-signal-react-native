import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './styles';

type BatButton = {
  buttonName: string;
  buttonColor: string;
  buttonFunction: () => void;
}

export default function BatButton({ buttonName, buttonColor, buttonFunction }: BatButton) {
  return (
    <View style={styles.container}>
      <Pressable onPress={buttonFunction} style={[styles.button, {backgroundColor: buttonColor || 'black'}]}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </Pressable>
    </View>
  );
}