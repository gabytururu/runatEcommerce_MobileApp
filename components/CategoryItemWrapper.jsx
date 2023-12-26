import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'
import {useDispatch} from 'react-redux'
import {setCategorySelected} from '../features/shopSlice'

const CategoryItemWrapper = ({category, navigation}) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate('productsByCategory',{category})
        dispatch(setCategorySelected(category))
      }}>
      <Card style={styles.cardContainer}>
       <Text style={styles.cardChildText}>{category}</Text>
      </Card>
    </TouchableOpacity>  
  )
}

export default CategoryItemWrapper

const styles = StyleSheet.create({
  cardContainer:{
    backgroundColor:colors.mintSoft,
    marginTop: 15,
    margin:7,
    padding:10,
    borderRadius: 5
  },
  cardChildText:{
    color: colors.dark
  }
})