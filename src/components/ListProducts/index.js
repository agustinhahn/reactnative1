import { View, StyleSheet, FlatList } from 'react-native'
import CardProducts from './CardProducts'

const ListProducts = ({products, editCard, onModal, handleInfo}) => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CardProducts item ={item} onModal={onModal} editCard={editCard} handleInfo={handleInfo}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        margin:30,
        width: '100%'
    },
})

export default ListProducts