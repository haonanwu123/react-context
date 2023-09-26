import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MyContextProvider, useMyContext } from './Context/Context';

export function Counter() {
  const { count, increment, decrement } = useMyContext();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <MyContextProvider>
      <View style={styles.container}>
        <Text>My Context Example</Text>
        <Counter />
      </View>
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
