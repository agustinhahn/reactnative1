import { View, StyleSheet, TextInput, Button, Modal, Text } from 'react-native'


const ModalNewProduct = ({visible, addProd, newProduct, newPrice, newStock, newCategory, changeTitle, changePrice, changeCategory, changeStock, handleModal}) => {
    return (
        <Modal
        visible={visible}
        >
            <View>
                <View>
                    <Text>Nombre del producto</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newProduct}
                        onChangeText={(text) => changeTitle(text)}
                    />
                </View>
                <View>
                    <Text>Categoria</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newCategory}
                        onChangeText={(text) => changeCategory(text)}
                    />
                </View>
                <View>
                    <Text>Stock</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newStock}
                        onChangeText={(text) => changeStock(text)}
                    />
                </View>
                <View>
                    <Text>Precio</Text>
                    <TextInput
                        placeholder='escribe aqui'
                        value={newPrice}
                        onChangeText={(text) => changePrice(text)}
                    />
                </View>
                <Button title='Aceptar' onPress={() => addProd()} />
                <Button title="Cerrar" onPress={() => handleModal(false)} />
            </View>
        </Modal>
    )
}

export default ModalNewProduct