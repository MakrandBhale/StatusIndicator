import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let localDimens = 36;
const PRIMARY_COLOR = '#3454F6';
const PADDING = 12;

const Bulb = ({dimens, isSelected, position})=> {
    console.log(localDimens);
    return (
        <View style={[styles.parent, {left: position}]}>
            <View style={[isSelected ? styles.selected : styles.notSelected, styles.defaultStyling]}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    selected: {
        
        backgroundColor: '#000',
        
    },

    notSelected: {
        borderWidth: 3,
        borderColor: PRIMARY_COLOR,
    },

    defaultStyling: {
        height: localDimens - PADDING,
        width: localDimens - PADDING,
        borderRadius: localDimens - PADDING,
        
    },

    parent: {
        height: localDimens,
        width: localDimens,
        padding: PADDING,
        position: 'absolute',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Bulb;