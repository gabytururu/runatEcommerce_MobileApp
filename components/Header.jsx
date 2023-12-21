import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { AntDesign, Entypo } from '@expo/vector-icons'; 


const Header = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.navButtonsContainer}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.navButton}>
          <AntDesign name="caretleft" size={20} color= "white"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigation.popToTop} style={styles.navButton}>
          <Entypo name="home" size={20} color= "white"/>
        </TouchableOpacity>
      </View>    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row-reverse',
   
    height: 100,
    backgroundColor: colors.dark,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 5,
    padding: 10,
    alignItems:'center',
    justifyContent: 'center',
    },
  headerTextContainer:{
    width: '70%',
  },
  headerText:{    
    textAlign: 'right',
    color: colors.clear,
    color: 'white',
    fontFamily: 'MeowScript',
    fontSize: 35,
    textTransform: 'capitalize'
  },
  navButtonsContainer:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
  navButton:{
    padding:10
  }
})