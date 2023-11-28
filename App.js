
import { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Text, FlatList, Modal } from 'react-native'
import uuid from 'react-native-uuid';

const App = () => {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPrecioProduct, setNewPrecioProduct] = useState("")
  const [products, setProducts] = useState([])
  const [productSelect, setproductSelect] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [modalEditVisible, setModalEditVisible] = useState(false)
  
  const handleAddProduct = () =>{
        const newProduct = {
          id : uuid.v4(),
          title:newTitleProduct,
          price: newPrecioProduct
        }
        setProducts(current => [...current, newProduct])
        setNewTitleProduct("")
        setNewPrecioProduct("")
        console.log(products)
  }

  const handleModal = (item) => {
    setproductSelect(item)
    setModalVisible(true)
  }

  const handleDeleteProduct = ()=> {
    setProducts(current => current.filter(product => product.id !== productSelect.id))
    setModalVisible(false)
  }

  const handleCard = (item) =>{
    setproductSelect(item)
    console.log(item.id)
    setModalEditVisible(true)
  }

  const handleConfirmarCambio = () =>{
    let idBuscado = productSelect.id
    let indice = products.findIndex(item => item.id === idBuscado)
    if(indice !== -1){
      products[indice].title = "holanuevonombreaqui"
    }
    setModalEditVisible(false)
  }

  return (
    <View style={styles.containerGral}>
      <View style={styles.container}>
        <TextInput 
        placeholder="Nombre"
        value={newTitleProduct}
        style={styles.input}
        onChangeText={(t)=> setNewTitleProduct(t)} />
        <TextInput 
        placeholder="Precio"
        value={newPrecioProduct}
        style={styles.input}
        onChangeText={(t)=> setNewPrecioProduct(t)} />
        <Button title="ADD" onPress={handleAddProduct}/>
      </View>
      <View style={styles.listContainer}>
          <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item})=>  <View style={styles.productCard}>
                                    <Text style={styles.textProduct}>{item.title}</Text>
                                    <Text style={styles.textProduct}>{item.price}</Text>
                                    <Button title="EDIT" onPress={()=>handleCard(item)} />
                                    <Button title="DELETE" onPress={()=>handleModal(item)} />
                                  </View>}  
          />
          <Modal style={styles.modalContent}
            visible={modalVisible}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>
                    Estas seguro que queres eliminar:
                  </Text>
                  <Text style={styles.modalText}>{productSelect.title}</Text>
                  <Button title='Confirmo' onPress={() => handleDeleteProduct()} />
                  <Button title="Cerrar" onPress={()=>setModalVisible(false)} />
                </View>
              </View>
          </Modal>
          <Modal style={styles.modalContent}
            visible={modalEditVisible}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <TextInput 
                  placeholder="Nuevo nombre"
                  value={newTitleProduct}
                  style={styles.input}
                  onChangeText={(t)=> setNewTitleProduct(t)} />
                  <TextInput 
                  placeholder="Nuevo precio"
                  value={newPrecioProduct}
                  style={styles.input}
                  onChangeText={(t)=> setNewPrecioProduct(t)} />
                  <Text style={styles.modalText}>Nombre actual:{productSelect.title}</Text>
                  <Text style={styles.modalText}>Precio actual:{productSelect.price}</Text>
                  <Button title='Confirmo' onPress={() => handleConfirmarCambio()} />
                  <Button title="Cerrar" onPress={()=>setModalEditVisible(false)} />
                </View>
              </View>
          </Modal>
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
    width: 150
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
  },
  modalContainer : {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },  
  modalContent: {
    width: '80%',
    borderWidth: 2,
    gap: 10,
    padding: 10
  },
  modalText: {
    textAlign: 'center'
  }
})

export default App