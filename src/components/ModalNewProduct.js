import { View, StyleSheet, TextInput, Button, Modal, Text } from 'react-native'


const ModalNewProduct = ({visible, addProd, newProduct, newPrice, newStock, newCategory, changeTitle, changePrice, changeCategory, changeStock, handleModal}) => {
    return (
        <Modal style={styles.modalContent}
        visible={visible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Nombre del producto</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newProduct}
                        style={styles.input}
                        onChangeText={(text) => changeTitle(text)}
                    />
                </View>
                <View>
                    <Text style={styles.modalText}>Categoria</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newCategory}
                        style={styles.input}
                        onChangeText={(text) => changeCategory(text)}
                    />
                </View>
                <View>
                    <Text style={styles.modalText}>Stock</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newStock}
                        style={styles.input}
                        onChangeText={(text) => changeStock(text)}
                    />
                </View>
                <View>
                    <Text style={styles.modalText}>Precio</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newPrice}
                        style={styles.input}
                        onChangeText={(text) => changePrice(text)}
                    />
                </View>
                <Button title='Aceptar' onPress={() => addProd()} />
                <Button title="Cerrar" onPress={() => handleModal(false)} />
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
        width: '80%',
        borderWidth: 2,
        gap: 10,
        padding: 10,
        backgroundColor: "#337357"
    },
    input: {
        backgroundColor: "#FCFFFC",
        borderWidth: 4,
        padding: 4,
        width: 150
    },
    modalText: {
        textAlign: 'flex-start  '
    }
})


export default ModalNewProduct