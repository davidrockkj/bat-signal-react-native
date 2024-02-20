import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

type GettingProps = {
  label: string;
  mode: any;
  placeholder: string;
  lines: number;
}



export function BatInput(props: GettingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {props.label || 'Label'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder={props.placeholder || 'Digite aqui'}
        inputMode={props.mode}
        placeholderTextColor={'#bababa'}
        multiline
        editable
        numberOfLines={props.lines || 1}
      />
    </View>
  );
}