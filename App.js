import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Constants from 'expo-constants';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Pressable, FlatList, Modal } from 'react-native';
import RemoveModal from './RemoveModal';

const Prod = [
  {
    name:"remeras",
    id:1,
  },
  {
    name:"botines",
    id:2,
  },
  {
    name:"balones",
    id:3,
  },
  {
    name:"shorts",
    id:4,
  }
]

export default function App() {

const [counter, setCounter] = useState(0)
const [inputValue,setInputValue] = useState(``)
const[cartItems,setCartItems] = useState([])
const [modalVisible, setModalVisible] = useState(false)
const [itemSelected, setItemSelected] = useState(null)

const handleAddCounter = () => setCounter(counter + 1)
const handleInputChange= (value) => setInputValue(value)

const handleModal = (id) =>{
  
  setModalVisible(true) ;
  setItemSelected(id)
}

const addItem = () => {
  const newItem = {
    name:inputValue,
    id:new Date().getTime()
  }

  setCartItems([...cartItems, newItem])
}

 


  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <RemoveModal
      modalVisible={modalVisible}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setModalVisible={setModalVisible}
      itemSelected={itemSelected}
      
      />
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        alignItems: "center",
      }}>

        <Text>CARRITO</Text>
        <Image style={{ width: 50, height: 50 ,}} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvz9BIkJXKMIJNc99dZ8t9mqJ_J2B5bK4VQ&usqp=CAU" }} />
      </View>
      <View style={{flexDirection:"row"}}>
<TextInput onChangeText={handleInputChange} value={inputValue}
style={{
  borderColor:"black",
  borderWidth: 1,
  paddingVertical:10,
  paddingHorizontal:20,
  borderRadius:5,
  width:"90%",
 
}}
 placeholder="Ingrese producto"
 />
<Pressable onPress={addItem}>
  <Text style={{fontSize:40}} >+</Text>
 </Pressable>
      </View>
      <View style={styles.productList} >

<FlatList
data={cartItems}
renderItem={({item})=>  (
  <View style={{width:400, flexDirection:"row"}} >
    <Text style={styles.product} >{item.name}</Text>
    <Pressable onPress={ () => handleModal (item.id)}>
      <Text style={{fontSize:23}}>-</Text>
    </Pressable>
  </View>
)}
keyExtractor={(item)=>item.id}

/>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  backgroundColor:"white",
  flex:1,
  paddingHorizontal:14,
  paddingTop: Constants.statusBarHeight
},
product:{
  fontSize:16,
  fontWeight:"bold",
  padding:4,
},
modalContainer:{
height:250,
justifyContent:"space-between",
alignItems:"center",
backgroundColor:"white",
borderRadius:20,

},
productlist:{
  justifyContent:"center",
  alignItems:"center",
  paddingVertical:10,
}

})
