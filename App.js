
import { useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import uuid from 'react-native-uuid';
import AddProduct from './src/components/AddProduct';
import ListProducts from './src/components/ListProducts';
import ModalDelete from './src/components/ModalDelete';
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
  }

  const handleModal = (item) => {
    setproductSelect(item)
    setModalVisible(true)
  }

  const handleDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelect.id))
    setModalVisible(false)
  }

  const handleCard = (item) =>{
    setproductSelect(item)
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
      <Text style={styles.tituloh1}>STOCK APP</Text>
      <AddProduct 
        product={newTitleProduct} 
        price={newPrecioProduct} 
        changeTitle={setNewTitleProduct} 
        changePrice={setNewPrecioProduct} 
        addProd={handleAddProduct}/>
      <ListProducts 
        products={products} 
        editCard={handleCard} 
        onModal={handleModal}/>
      <ModalDelete 
        products={productSelect}  
        visible={modalVisible} 
        onModal={handleModal} 
        onDelete={handleDeleteProduct}  />
      <ModalEdit 
        acceptEdit = {handleConfirmarCambio} 
        acceptEditVisible={setModalEditVisible} 
        newPrice={setNewPrecioProduct}  
        price={newPrecioProduct}  
        products={productSelect} 
        visible={modalEditVisible}/>
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
  tituloh1: {
    color:"white",
    fontSize:40,
    marginTop:20
  }
})

export default App