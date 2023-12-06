import { View, StyleSheet, TextInput, Button, Modal, Text, Picker} from 'react-native'


const ModalNewProduct = ({visible, addProd, newProduct, newPrice, newStock, newCategory, changeTitle, changePrice, changeCategory, changeStock, handleModal}) => {
    return (
        <Modal style={styles.modalContent}
        visible={visible}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.tituloh1}>NUEVO PRODUCTO</Text>
                <View style={styles.viewGral}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Nombre</Text>
                        <TextInput
                            placeholder='escribe aqui'
                            value={newProduct}
                            style={styles.input}
                            onChangeText={(text) => changeTitle(text)}
                        />
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Stock</Text>
                        <TextInput
                            placeholder='escribe aqui'
                            value={newStock}
                            style={styles.input}
                            onChangeText={(text) => changeStock(text)}
                        />
                    </View>
                    <View style={styles.modalContent}> 
                        <Text style={styles.modalText}>Precio</Text>
                        <TextInput
                            placeholder='escribe aqui'
                            value={newPrice}
                            style={styles.input}
                            onChangeText={(text) => changePrice(text)}
                        />
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Categoria</Text>
                        <Picker
                            newCategory = {newCategory}
                            onValueChange = {(itemValue, itemIndex) => changeCategory(itemValue)}
                            style={styles.input}
                        >
                            <Picker.Item label="ftth" value="opcion 1" />
                            <Picker.Item label="wirelless" value="opcion 2" />
                            <Picker.Item label="herramientas" value="opcion 3" />
                        </Picker>
                    </View>
                    <View style={styles.modalContent}>
                        <Button style={styles.buttonstyle} title='Aceptar' onPress={() => addProd()} />
                        <Button style={styles.buttonstyle} title="Cerrar" onPress={() => handleModal(false)} />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: "space-around"
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D0628"
    },
    modalContent: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        padding: 20,
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
        backgroundColor: "#FCFFFC",
        borderWidth: 1,
        padding: 2,
        width: 180,
        justifyContent:"center",
        alignItems:'center'
    },
    modalText: {
        color: 'white',
        padding: 2,
        width: 70
    },
    buttonstyle: {
        margin: 50,
    },
    viewGral: {
        backgroundColor: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
    },
    tituloh1: {
        color:"white",
        fontSize:40,
        marginTop:20,
        marginBottom:20
    }
})
    

export default ModalNewProduct