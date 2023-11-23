
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'

const App = () => {
  return (
    <View style={styles.containerGral}>
      <View style={styles.container}>
        <TextInput 
        placeholder="ingrese producto"
        style={styles.input} />
        <Button title="ADD"/>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.productCard}>
          <Text style={styles.textProduct}>product 1</Text>
          <Text style={styles.textProduct}>$500</Text>
          <Button title="DELETE" />
        </View>
        <View style={styles.productCard}>
          <Text style={styles.textProduct}>product 2</Text>
          <Text style={styles.textProduct}>$150</Text>
          <Button title="DELETE" />
        </View>
        <View style={styles.productCard}>
          <Text style={styles.textProduct} >product 3</Text>
          <Text style={styles.textProduct}>$800</Text>
          <Button title="DELETE"/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerGral: {
    backgroundColor:"red",
    flex:1,
    justifyContent:"start", 
    alignItems:"center"
  },
  container: {
    marginTop:50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent:"space-around"
  },
  listContainer:{
    margin:50,
    width: '100%'
  },
  input: {
    backgroundColor:"white",
    borderWidth: 4,
    padding: 4,
    width: 200
  }, 
  productCard : {
    backgroundColor:"blue",
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderWidth: 4,
    padding: 10,
    margin: 10,
    justifyContent: 'space-around'
  },
  textProduct: {
    color: "white",
    padding: 10
  }
})

export default App