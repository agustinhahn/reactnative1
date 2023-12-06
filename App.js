
import { useState } from 'react'
import { View, StyleSheet, Text, Button} from 'react-native'
import uuid from 'react-native-uuid';
import AddProduct from './src/components/AddProduct';
import ListProducts from './src/components/ListProducts';
import ModalDelete from './src/components/ModalDelete';
import ModalEdit from './src/components/ModalEdit';
import ModalNewProduct from './src/components/ModalNewProduct';
import NotProducts from './src/components/NotProducts';
import ListVariables from './src/components/ListVariables';
import InfoProducts from './src/components/InfoProducts';

const App = () => {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPrecioProduct, setNewPrecioProduct] = useState("")
  const [newStockProduct, setnewStockProduct] = useState("")
  const [newCategoryProduct, setnewCategoryProduct] = useState("")
  const [products, setProducts] = useState([])
  const [productSelect, setproductSelect] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [modalEditVisible, setModalEditVisible] = useState(false)
  const [modalNewProduct, setModalNewProduct] = useState(false)
  const [notProductVisible, setNotProductVisible] = useState(true)
  const [listVariables, setListVariables] = useState(false)
  const [infoProducts, setInfoProducts] = useState(false)

  const currentDate = new Date();
  const day = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const hours = currentDate.getHours()
  const minute = currentDate.getMinutes()
  const formatDate = day < 10 ? `0${day}` : day
  const formatMonth = month <10 ? `0${month}` : month
  const formatHours = hours <10 ? `0${hours}` : hours
  const formatMinutes = minute <10 ? `0${minute}` : minute
  const formatedDate = `${formatDate}/${formatMonth}/${year} -- ${formatHours}:${formatMinutes}`
  
  const handleAddProduct = () =>{
    if (newTitleProduct !== "" || newPrecioProduct !== ""|| newStockProduct !== ""|| newCategoryProduct !== ""){
        const newProduct = {
          date: formatedDate,
          lastEdit: null,
          id : uuid.v4(),
          title:newTitleProduct,
          price: newPrecioProduct,
          stock: newStockProduct,
          category: newCategoryProduct
        }
        setProducts(current => [...current, newProduct])
        setNewTitleProduct("")
        setNewPrecioProduct("")
        setnewStockProduct("")
        setnewCategoryProduct("")
        setNotProductVisible(false)
        setListVariables(true)
        setModalNewProduct(false)
  }}


  const handleModal = (item) => {
    setproductSelect(item)
    setModalVisible(true)
  }

  const handleDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelect.id))
    if(products.length < 2){
      setNotProductVisible(true)
      setListVariables(false)
    }
    setModalVisible(false)
  }

  const handleCard = (item) =>{
    setproductSelect(item)
    setModalEditVisible(true)
  }

  const handleInfo = (item) =>{
    setproductSelect(item)
    setInfoProducts(true)
  }

  const handleConfirmarCambio = () =>{
    let idBuscado = productSelect.id
    let indice = products.findIndex(item => item.id === idBuscado)
    if(indice !== -1){
      if(newPrecioProduct != ""){
        products[indice].price = newPrecioProduct
        products[indice].lastEdit = formatedDate
      }
      if(newStockProduct != ""){
        products[indice].stock = newStockProduct
        products[indice].lastEdit = formatedDate
      }
    }
    setNewPrecioProduct("")
    setnewStockProduct("")
    setModalEditVisible(false)
  }

    return (
      <View style={styles.containerGral}>
        <Text style={styles.tituloh1}>STOCK APP</Text>
        <Button title='AGREGAR NUEVO PRODUCTO' onPress={()=>{setModalNewProduct(true)}}/>
        <ListVariables visible={listVariables} />
        <ListProducts 
          products={products} 
          editCard={handleCard} 
          onModal={handleModal}
          handleInfo={handleInfo}/>
        <ModalDelete 
          products={productSelect}  
          visible={modalVisible}
          estadoModal = {setModalVisible}
          onModal={handleModal} 
          onDelete={handleDeleteProduct}  />
        <ModalEdit 
          acceptEdit = {handleConfirmarCambio} 
          acceptEditVisible={setModalEditVisible} 
          newPrice={setNewPrecioProduct}  
          price={newPrecioProduct}
          newStock={setnewStockProduct}  
          stock={newStockProduct}
          products={productSelect} 
          visible={modalEditVisible}/>
        <ModalNewProduct 
          visible={modalNewProduct}
          handleModal={setModalNewProduct}
          addProd={handleAddProduct}
          newProduct={newTitleProduct} 
          newPrice={newPrecioProduct} 
          newCategory={newCategoryProduct}
          newStockProduct={newStockProduct}
          changeTitle={setNewTitleProduct} 
          changePrice={setNewPrecioProduct} 
          changeStock={setnewStockProduct}
          changeCategory={setnewCategoryProduct}
        />
        <NotProducts
        visible={notProductVisible}
        />
        <InfoProducts 
        visible={infoProducts}
        handleInfo={setInfoProducts}
        product={productSelect}
        />
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
    marginTop:20,
    marginBottom:20
  }
})

export default App