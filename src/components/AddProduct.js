import { View, StyleSheet, TextInput, Button } from 'react-native'

const AddProduct = ({product, price,changeTitle,changePrice,addProd}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nombre"
                value={product}
                style={styles.input}
                onChangeText={(t) => changeTitle(t)} />
            <TextInput
                placeholder="Precio"
                value={price}
                style={styles.input}
                onChangeText={(t) => changePrice(t)} />
            <Button title="ADD" onPress={addProd} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent:"space-around"
    },  
    input: {
        backgroundColor:"#FCFFFC",
        borderWidth: 4,
        padding: 4,
        width: 150
    }, 
})

export default AddProduct