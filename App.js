
import { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Text, FlatList, Modal } from 'react-native'
import uuid from 'react-native-uuid';
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';
import ModalEdit from './src/components/ModalEdit';

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
      products[indice].price = newPrecioProduct
    }
    setNewPrecioProduct("")
    setModalEditVisible(false)
  }

  return (
    <View style={styles.containerGral}>
      <AddProduct product={newTitleProduct} price={newPrecioProduct} changeTitle={setNewTitleProduct} changePrice={setNewPrecioProduct} addProd={handleAddProduct}/>
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
          <ModalDelete product = {productSelect} onModal={handleModal} visible={modalVisible} onDelete={handleDeleteProduct}/>
          <ModalEdit acceptEdit ={handleConfirmarCambio} acceptEditVisible ={setModalEditVisible} newPrice={setNewPrecioProduct} price={newPrecioProduct} product = {productSelect} visible={modalEditVisible} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerGral: {
    backgroundColor:"#0D0628",
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
    backgroundColor:"#FCFFFC",
    borderWidth: 4,
    padding: 4,
    width: 150
  }, 
  productCard : {
    backgroundColor:"#647AA3",
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
    justifyContent:"center",
    backgroundColor: "#0D0628"
  },  
  modalContent: {
    width: '80%',
    borderWidth: 2,
    gap: 10,
    padding: 10,
    backgroundColor:"#337357"
  },
  modalText: {
    textAlign: 'flex-start  '
  }
})

export default App