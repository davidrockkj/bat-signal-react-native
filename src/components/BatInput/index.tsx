import React, {useState}  from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

type GettingProps = {
  label: string;
  mode: any;
  placeholder: string;
  lines: number;
  text: string;
}



export function BatInput(props: GettingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {props.label || 'NOME'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder={props.placeholder || 'Digite aqui'}
        inputMode={props.mode}
        placeholderTextColor={'#bababa'}
        multiline
        editable
        numberOfLines={props.lines || 2}
        value={props.text}
      />
    </View>
  );
}