import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ContactsListItem from '../components/ContactsListItem'
import chats from '../../assets/data/chats.json';
const ContactsScreen = () => {
  return (
   <FlatList 
   data={chats}
   renderItem={({item}) => 
        <ContactsListItem user={item.user} />}
    style ={{backgroundColor:'white'}}           
   />
  );
};

export default ContactsScreen;