import { Modal, View, Pressable, Text, StyleSheet } from "react-native";

const RemoveModal = ({
  modalVisible,
  cartItems,
  setCartItems,
  setModalVisible,
  itemSelected
}) => {
  const removeItem =  () => {
    const filteredArray = cartItems.filter((item)=>  item.id !== itemSelected)
    setCartItems(filteredArray);
    setModalVisible(false)
  }

    return (
    <Modal animationType='slide' transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text style={{fontSize:30, fontWeight:"bold"}}>
       ¿Desea remover el producto?
        </Text>
        <Pressable onPress={removeItem}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>SI</Text>
        </Pressable>
        <Pressable onPress={()=>setModalVisible(false)}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>NO</Text>
        </Pressable>
      </View>
    </Modal>
    );
  }
  
  export default RemoveModal;

  const styles = StyleSheet.create({
  
    modalContainer:{
    height:250,
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"white",
    borderRadius:20,
    }
    
    })
    