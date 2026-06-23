import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Banner from './src/banner';
import Header from './src/header';
import Search from './src/search';
export default function App() {
  return (
    <View style={styles.container}>

     <Header></Header>
     <Search></Search>
     <Banner></Banner>

    
      

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
  },

  


});