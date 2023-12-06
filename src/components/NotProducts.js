import { View, StyleSheet, TextInput, Button, Modal, Text } from 'react-native'

const NotProducts = ({visible}) => {
    
    return visible ? (
        <View>
            <View style={styles.line}/>
            <Text style={styles.subtitulo}>ACTUALMENTE NO HAY PRODUCTOS EN STOCK</Text>
            <View style={styles.line}/>
        </View>
    ) : null
}

export default NotProducts

const styles = StyleSheet.create({
    subtitulo: {
        color:"white",
        fontSize:15,
        marginTop:20,
        marginBottom:20,
    },
    line: {
        color:"white",
        borderBottomColor: "white",
        borderBottomWidth: 1
    }
})