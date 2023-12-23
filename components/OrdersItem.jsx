import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import Card from './Card'
import { colors } from '../global/colors';

const OrdersItem = ({order, orderTotal}) => {
  return (
    <Card style={styles.orderItemContainer}>      
        <View style={styles.orderContentDetails}>          
          <Text style={styles.dateOfOrder}>Orden Creada el{new Date(order.createdAt).toLocaleString()}</Text>       
          <Text style={styles.orderTotal}>Total: ${orderTotal}</Text>
        </View>
      
        <TouchableOpacity onPress={null} style={styles.searchIcon}>
            <Feather name="search" size={24} color={colors.primary} />
        </TouchableOpacity>
    </Card>
 
  )
}

export default OrdersItem

const styles = StyleSheet.create({
  orderItemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    backgroundColor: colors.clear,
    margin:3,
    borderRadius: 5
  },
  orderContentDetails:{
    padding: 10,
    width: '90%'  
  },
  dateOfOrder:{
    fontFamily: 'Poppins-Regular'

  },
  orderTotal:{
    fontFamily: 'Poppins-SemiBold'
  },
  searchIcon:{
    marginLeft: 'auto'
  }
})