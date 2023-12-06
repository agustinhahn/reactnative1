import { View, StyleSheet, TextInput, Button, Modal, Text, Picker} from 'react-native'


const InfoProducts = ({visible,handleInfo,product}) => {
    return (
        <Modal style={styles.modalContent}
        visible={visible}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.tituloh1}>INFO DEL PRODUCTO</Text>
                <View style={styles.viewGral}>
                    <View>
                        <Text style={styles.modalText}>Id: {product.id}</Text>
                        <Text style={styles.modalText}>Nombre: {product.title}</Text>
                        <Text style={styles.modalText}>Categoria: {product.category}</Text>
                        <Text style={styles.modalText}>Precio: {product.price}</Text>
                        <Text style={styles.modalText}>Stock: {product.stock}</Text>
                        <Text style={styles.modalText}>Fecha carga: {product.date}</Text>
                        <Text style={styles.modalText}>Ultimo edit: {product.lastEdit}</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Button style={styles.buttonstyle} title="Cerrar" onPress={() => handleInfo(false)} />
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
        padding: 5,
    },
    buttonstyle: {
        margin: 50,
    },
    viewGral: {
        backgroundColor: 'gray',
        padding: 30,
        width:"auto"
    },
    tituloh1: {
        color:"white",
        fontSize:40,
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
    }
})
    

export default InfoProducts