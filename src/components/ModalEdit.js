import { View, StyleSheet, TextInput, Button, Modal, Text } from 'react-native'

const ModalEdit = ({acceptEdit, acceptEditVisible, newPrice ,price, products, visible, newStock, stock}) => {
    return (
        <Modal style={styles.modalContent}
            visible={visible}>
            <View style={styles.modalContainer}>
                <Text style={styles.tituloh1}>EDITAR PRODUCTO</Text>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Producto seleccionado: {products.title}</Text>
                        <Text style={styles.modalText}>Precio actual: ${products.price}</Text>
                        <TextInput
                            placeholder="Nuevo precio"
                            value={price}
                            style={styles.input}
                            onChangeText={(t) => newPrice(t)} />
                        <Text style={styles.modalText}>Stock actual: {products.stock}</Text>
                        <TextInput
                            placeholder="Nuevo stock"
                            value={stock}
                            style={styles.input}
                            onChangeText={(t) => newStock(t)} />
                        <Button title='Confirmo' onPress={() => acceptEdit()} />
                        <Button title="Cerrar" onPress={() => acceptEditVisible(false)} />
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
        width: '80%',
        borderWidth: 2,
        gap: 10,
        padding: 10,
        backgroundColor: 'gray',
    },
    input: {
        backgroundColor: "#FCFFFC",
        borderWidth: 4,
        padding: 4,
        width: 150
    },
    modalText: {
        textAlign: 'left  '
    },
    tituloh1: {
        color:"white",
        fontSize:40,
        marginTop:20,
        marginBottom:20
    }
})

export default ModalEdit