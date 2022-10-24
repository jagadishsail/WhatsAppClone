import { View, KeyboardAvoidingView, ImageBackground, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Message from '../components/Message';
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
  >
    <ImageBackground source={bg} style={StyleSheet.bg}>
       <FlatList data={messages}
                 renderItem={({item}) => <Message message={item}/>}
                 style={styles.list}
                 inverted
         />
        <InputBox />
      </ImageBackground>
      </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    }
})