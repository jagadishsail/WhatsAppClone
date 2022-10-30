import { View, Text } from 'react-native'
import React from 'react'

const ContactsListItem = ({user}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={()=>{}} style={styles.container}>
            <Image source={{uri : user.image}}
                    style={styles.image}
            />
            <View style={styles.content}>
                
                <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
                <Text style={styles.status} numberOfLines={2}>{user.status}</Text>
                
            </View>
        </Pressable>

        
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70

    },
    image: {width: 60,
            height: 60, 
            borderRadius:30,
            marginRight:10
        },
    content:{
      flex: 2
    },
    row: {
        flexDirection: 'row',
        marginBottom:5
    },
    name: {
        flex:1,
        fontWeight: 'bold'
    },
    status:{
        color: 'gray'
    }
})

export default ContactsListItem;