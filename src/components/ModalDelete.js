import { View, Button, Text, Modal, StyleSheet } from 'react-native'

const ModalDelete = ({products, onModal, visible, onDelete,estadoModal }) => {
    return (
        <Modal style={styles.modalContent}
            visible={visible}>
            <View style={styles.modalContainer}>
                <Text style={styles.tituloh1}>ELIMINAR PRODUCTO</Text>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>
                        Estas seguro que queres eliminar:
                    </Text>
                    <Text style={styles.modalText}>{products.title}</Text>
                    <Button title='Confirmo' onPress={() => onDelete()} />
                    <Button title="Cerrar" onPress={() => estadoModal(false)} />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
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
    modalText: {
        textAlign: 'flex-start  '
    },
    tituloh1: {
        color:"white",
        fontSize:40,
        marginTop:20,
        marginBottom:20
    }
})


export default ModalDelete