import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import cart_data from '../data/cart_data.json'
import CartItem from '../components/CartItem'
import {useState, useEffect} from 'react'
import { colors } from '../global/colors'

const CartScreen = () => {
  const [cartTotal, setCartTotal] = useState(0)
  useEffect (()=>{
    const cartTotalAmount = cart_data.reduce((accumulator,currentItem)=>(
      accumulator += currentItem.price * currentItem.quantity
    ),0)
    setCartTotal(cartTotalAmount)
  },[])

  const renderCartItem = ({item}) =>(
    <CartItem 
      item={item} 
    />
  )
    
  
  return (
    <View style={styles.cartContainer}>
      <FlatList style={styles.cartFlatlist}
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item=>item.id}
      />
      <View style={styles.cartConfirmationContainer}>
        <Text style={styles.cartTotalAmount}>Total: ${cartTotal}.00  USD</Text>
        <TouchableOpacity style={styles.cartConfirmButton}>
          <Text style={styles.cartConfirmButtonText}>Confirmar Orden</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer:{
    flex: 1,
    backgroundColor: colors.clearGreen
  },
  cartFlatlist:{
    padding: 10,
    borderRadius:8,
  },
  cartConfirmationContainer:{
    flexDirection: 'row',
    marginBottom:35,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lightYellow,
    borderRadius: 5,
    padding:10
  },
  cartTotalAmount:{
    color: colors.primary,
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',

  },
  cartConfirmButton:{
    backgroundColor: colors.callToActionA,
    padding:10,
    borderRadius:5
  },
  cartConfirmButtonText:{
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  }
  


})