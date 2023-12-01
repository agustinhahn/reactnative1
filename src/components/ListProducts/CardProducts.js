import { View, StyleSheet, Button, Text } from 'react-native'

const CardProducts = ({item, onModal, editCard}) => {
    return (
        <View style={styles.productCard}>
                    <Text style={styles.textProduct}>{item.title}</Text>
                    <Text style={styles.textProduct}>{item.price}</Text>
                    <Button title="EDIT" onPress={() => editCard(item)} />
                    <Button title="DELETE" onPress={() => onModal(item)} />
                </View>
    )
}

const styles = StyleSheet.create({
    productCard : {
        backgroundColor:"#647AA3",
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderWidth: 4,
        padding: 10,
        margin: 10,
        justifyContent: 'space-around'
    },
    textProduct: {
        color: "white",
        padding: 10
    }
})

export default CardProducts