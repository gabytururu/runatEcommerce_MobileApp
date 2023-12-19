import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'

//const CategoryItemWrapper = ({category, onSelectCategoryEvent}) => {
const CategoryItemWrapper = ({category, navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('productsByCategory',{category})}>
      <Card style={styles.cardContainer}>
       <Text style={styles.cardChildText}>{category}</Text>
      </Card>
    </TouchableOpacity>
  
  )
}

export default CategoryItemWrapper

const styles = StyleSheet.create({
  cardContainer:{
    // flex: 1,
    // justifyContent: 'center',
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