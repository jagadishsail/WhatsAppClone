import { View, StyleSheet , TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');
  const onSend = () => {
    console.warn("Sending new message "+ newMessage);
  }

  return (
    <View style={styles.container}> 
       {/* Icon */}
      <AntDesign name="plus" size={20} color="royalblue"/>
      {/* Text Input */}
      <TextInput value={newMessage}
        onChangeText={setNewMessage}
        multiline
        style={styles.input} 
      />
       {/* Send button */}
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        backgroundColor:"whitesmoke",
        padding:5,
        paddingHorizontal: 10,
        alignItems:"center"
    },
    input: {
        fontSize:18,
        flex:1,
        backgroundColor:"white",
        padding: 5,
        paddingHorizontal:10,
        marginHorizontal: 10,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray"
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden"
    },
  });
  
export default InputBox;