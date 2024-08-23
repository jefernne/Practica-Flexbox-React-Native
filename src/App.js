
import { StyleSheet, Text, View } from 'react-native';
import {Flex} from '../src/components/Flex'

export default function App() {
  return (
    <View style={styles.container}>
      <Flex/>
    </View>
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
