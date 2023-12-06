import { View, StyleSheet, Text } from 'react-native'

const ListVariables = ({visible}) => {
    return visible ? (
        <View style={styles.listVar}>
            <Text style={styles.textVar}>Nombre</Text>
            <Text style={styles.textVar}>Cantidad</Text>
            <Text style={styles.textVar}>Precio</Text>
            <Text style={styles.textVar}>Info</Text>
            <Text style={styles.textVar}>Editar</Text>
            <Text style={styles.textVar}>Eliminar</Text>
        </View>
    ):null
}

export default ListVariables

const styles = StyleSheet.create({
    listVar : {
        backgroundColor:"#15288F",
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderWidth: 4,
        padding: 10,
        marginTop: 20,
        justifyContent: 'space-around', 
        marginLeft: 10,
        marginRight: 10
    },
    textVar: {
        color: "white",
        padding: 5,
    }
})