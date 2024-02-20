import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BatForm } from './src/components/BatForm';
import { BatHome } from './src/components/BatHome';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View  style={styles.home}>
        <BatHome />
      </View>

      <View style={styles.form}>
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
    
  },
  form: {
    position: 'absolute',
    left: 9999,
  },
  formActive: {
  
  }
});
