import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {useState} from 'react'
import { EvilIcons,Entypo  } from '@expo/vector-icons'; 
import { colors } from '../global/colors';

const SearchInput = ({onSearchHandlerEvent}) => {
  const [searchInput, setSearchInput] = useState('')
  return (
    <View style={styles.searchContainer}>
      <TextInput 
        style={styles.textInput}
        onChangeText={setSearchInput}
        value={searchInput}
        placeholder={'Qué estás buscando?...'}      
      />
      <TouchableOpacity onPress={()=>{onSearchHandlerEvent(searchInput)}}>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={null}>
        <EvilIcons name="cross" size={24} color="black" />
      </TouchableOpacity>     
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:10,
    backgroundColor: colors.mintSoft
  },
  textInput:{
    width: '80%'
  }
})