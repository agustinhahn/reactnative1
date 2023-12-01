import { View, StyleSheet, FlatList } from 'react-native'
import CardProducts from './CardProducts'

const ListProducts = ({products, editCard, onModal}) => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CardProducts item ={item} onModal={onModal} editCard={editCard}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        margin:50,
        width: '100%'
    },
})

export default ListProducts