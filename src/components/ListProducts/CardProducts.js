import { View, StyleSheet, Button, Text } from 'react-native'

const CardProducts = ({item, onModal, editCard, handleInfo}) => {
    return (
        <View style={styles.productCard}>
                    <Text style={styles.textProduct}>{item.title}</Text>
                    <Text style={styles.textProduct}>{item.stock}</Text>
                    <Text style={styles.textProduct}>${item.price}</Text>
                    <Button style={styles.textProduct} title="INFO" onPress={() => handleInfo(item)} />
                    <Button style={styles.textProduct} title="EDIT" onPress={() => editCard(item)} />
                    <Button style={styles.textProduct}title="DELETE" onPress={() => onModal(item)} />
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
        marginLeft: 10,
        marginRight: 10,
        marginBottom:10,
        justifyContent: 'space-around'
    },
    textProduct: {
        color: "white",
        padding: 5,
    }
})

export default CardProducts