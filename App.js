import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Text style={styles.title}>Join a Presentation</Text>
        <TextInput style={styles.input} />
        <Button title="Join" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 32,
    paddingHorizontal: 16,
    width: '100%',
    height: 44,
    backgroundColor: '#eaeaea',
  },
});
