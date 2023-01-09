import React, {Fragment, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {Feather} from '@expo/vector-icons'



const SearchBar = ({term,  onTermChange, onTermSubmit}) => {

    return (
        // <View style={styles.backgroundStyle}>
            <>
            <TextInput placeholder='Search' 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}
            />
            <Feather name='search' style={styles.iconStyle}/>        
            {/* <Feather name='sliders' style={styles.iconStyle} onPress={() => setModalVisible(!modalVisible)}/>        */}
 </>
        
    )
}
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        minWidth: 50,
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 20,
        alignSelf:'center',
        marginHorizontal: 15
    }
})
export default SearchBar;