import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity onPress={()=> console.log('hello world')} style={styles.plank}>
            <View style={styles.itemView}>
                <Text style={styles.textStyle}>{item.text}</Text>
                <Icon name="delete" size={28} 
                    onPress={()=> {deleteItem(item.id)}}
                    color="#ff5e78"/>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    itemView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    plank: {
        backgroundColor: '#d3e0ea',
        borderRadius: 8,
        margin: 8,
        height: 60,
        padding: 12,
        justifyContent: 'center',
    },

    textStyle: {
        color: '#000',
        fontSize: 18,

    }
})

export default ListItem;