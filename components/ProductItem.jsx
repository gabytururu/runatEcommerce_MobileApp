import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { colors } from '../global/colors'

const ProductItem = ({product}) => {
  return (
    <Card style={styles.productCard}>
      <Image
        style={styles.productImage}
        resizeMode='cover'
        source={{uri:product.thumbnail}}
      />
      <View>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDesc}>{product.description}</Text>
        <Text style={styles.productPrice}>Precio: ${product.price} MXN</Text>
      </View>
    </Card>
   
  )
}

export default ProductItem

const styles = StyleSheet.create({
  productCard:{
      flexDirection: 'row', 
      justifyContent: 'flex-start',
      backgroundColor:colors.lightYellow,
      marginTop: 15,
      margin:10,
      padding:10,
      borderRadius: 5,
      width: 'auto'
    },
  productName:{
    fontFamily: 'Poppins-SemiBold',   
  },
  // como logro que el texto de la descripcion no se salga(overflow) del contenedor?
  productDesc:{
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    // width:'auto'
    // flexWrap: 'wrap'
    //overflow: 'hidden'
  },
  productPrice:{
    fontFamily: 'Poppins-SemiBold',   
  },
  productImage:{
    width: 60,
    marginRight: 15,
   
  }
   
  
})