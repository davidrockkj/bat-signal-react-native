import React from 'react';
import { styles } from './styles';
import { View, Image, ScrollView, Text } from 'react-native';
import { BatInput } from '../BatInput';


import LogoBatman from '../../assets/batman.png';
import BatButton from '../BatButton';

export function BatForm() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image source={LogoBatman} 
          style={{ width: 100, height: 100, marginRight: 20}}
        />

        <Text style={styles.textHeader}>
          Sua coragem é a nossa força.
        </Text>

      </View>

      <BatInput 
        label='Nome'
        lines={1}
        mode={'text'}
        placeholder='Digite seu nome'
      />

      <BatInput 
        label='Telefone'
        lines={1}
        mode={'tel'}
        placeholder='Caso queira conversar por voz'
      />

      <BatInput 
        label='E-mail'
        lines={1}
        mode={'text'}
        placeholder='Para retornarmos contato'
      />

      <BatInput 
        label='Descrição'
        lines={5}
        mode={'text'}
        placeholder='Dê detalhes do que você está sentindo'
      />

      <BatButton />

    </ScrollView>
  );
}