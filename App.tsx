import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { BatHome } from './src/components/BatHome';
import { BatForm } from './src/components/BatForm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <BatForm />
      {/* <BatHome /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474350',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
