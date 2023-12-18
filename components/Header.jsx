import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'


const Header = ({title}) => {
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    height: 100,
    backgroundColor: colors.dark,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 5,
    padding: 10,
    alignItems:'center',
    justifyContent: 'center',
  
    },

  headerText:{
    flex:0.5,
    color: colors.clear,
    fontFamily: 'MeowScript',
    fontSize: 35,
    textTransform: 'capitalize'
  }
})