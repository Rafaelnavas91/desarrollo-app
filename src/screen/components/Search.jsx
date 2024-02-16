import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"


const Search = ({keyword,onSearch}) => {



    return (
        <View >
     <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}} >
            <TextInput onChangeText={onSearch} 
            value={keyword} 
            style={styles.input}
             placeholder="Buscar producto" />
<AntDesign name="search1"size={25} color="black"  />
</View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    input: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
        marginTop: 40
    }


}

)