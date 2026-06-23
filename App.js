import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Banner from './src/banner';
import Header from './src/header';
import Search from './src/search';
import CardMovies from './src/CardMovies';
export default function App() {
  return (
    <View style={styles.container}>

     <Header></Header>
     <Search></Search>
     <Banner></Banner>

    <View style = {{width:'90%'}}>
    <FlatList
    showsVerticalScrollIndicator= {false}
    horizontal = {true}
    data={Filmes}
    keyExtractor={(item)=> item.id}
    renderItem={({item})=> (

      <CardMovies
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.nota}
              />

    )}
    
    
    
    
    />


     </View>
      

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