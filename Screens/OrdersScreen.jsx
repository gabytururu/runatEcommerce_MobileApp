import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders_data from '../data/orders_data.json'
import OrdersItem from '../components/OrdersItem'
import { colors } from '../global/colors'

const OrdersScreen = () => {

const renderOrdersItem = ({item}) =>{
    const orderTotal = item.items.reduce((accum,currentItem) =>(
        accum += currentItem.price*currentItem.quantity
    ),0)

    return(
        <OrdersItem order={item} orderTotal={orderTotal}/>
    )
}
  return (
   <FlatList style={styles.ordersListContainer}
        data={orders_data}
        renderItem= {renderOrdersItem}
        keyExtractor={item => item.id}
   />
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
    ordersListContainer:{
        backgroundColor: colors.lightYellow,
        padding:10
    }
})