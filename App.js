import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <Image style={styles.container}
    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&usqp=CAU'}}

      />
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
