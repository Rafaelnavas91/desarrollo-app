import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        alignItems: "center",
      }}>

        <Text>CARRITO</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvz9BIkJXKMIJNc99dZ8t9mqJ_J2B5bK4VQ&usqp=CAU" }} />
      </View>
      <View style={{flexDirection:"row"}}>
<TextInput 
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
 <TouchableOpacity>
  <Text style={{fontSize:40}} >+</Text>
 </TouchableOpacity>
      </View>
      <View style={styles.productlist} >
<Text style={styles.product} >REMERAS</Text>
<Text  style={styles.product}>BOTINES</Text>
<Text  style={styles.product}>BALONES</Text>
<Text  style={styles.product}>SHORTS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  backgroundColor:"#ededed",
  flex:1,
  paddingHorizontal:14,
},
product:{
  fontSize:16,
  fontWeight:"bold",
  padding:4,
},
productlist:{
  justifyContent:"center",
  alignItems:"center",
  paddingVertical:10,
}

})
