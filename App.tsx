import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BatForm } from './src/components/BatForm';
import LogoBatman from './src/components/logoBatman';
import { useState } from 'react';
import BatButton from './src/components/BatButton';

export default function App() {

    const [classeAdicional, setClasseAdicional] = useState(false);
  
    const toggleClass = () => {
      setClasseAdicional(!classeAdicional);
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.home}>
        <LogoBatman />
        <BatButton 
          buttonColor='#ffc321'
          buttonName='Ativar Bat-Sinal'
          buttonFunction={ toggleClass }
        />
      </View>

      <View style={[styles.form, classeAdicional && styles.formActive]}>
        <BatForm />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474350',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  home: {
    width: '60%',
    gap: 20,
  },
  form: {
    position: 'absolute',
    left: 9999,
  },
  formActive: {
    left: 0,
  }
});
