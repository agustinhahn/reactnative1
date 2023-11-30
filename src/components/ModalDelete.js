import { View, Button, Text, Modal, StyleSheet } from 'react-native'

const ModalDelete = ({product, onModal, visible, onDelete }) => {
    return (
        <Modal style={styles.modalContent}
            visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>
                        Estas seguro que queres eliminar:
                    </Text>
                    <Text style={styles.modalText}>{product.title}</Text>
                    <Button title='Confirmo' onPress={() => onDelete()} />
                    <Button title="Cerrar" onPress={() => onModal(false)} />
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
    }
})


export default ModalDelete