import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import products_data from '../data/products_data.json'
import {useState, useEffect} from 'react'
import { colors } from '../global/colors'
import Header from '../components/Header'

//const ProductDetailScreen = ({productIdSelected}) => {
const ProductDetailScreen = ({route}) => {

  const [productSelected, setProductSelected] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const productId = route.params
  useEffect(()=>{
    const productChosenFound = products_data.find(prod => prod.id === productId)
    console.log('el chosen product fue-->',productChosenFound)
    setProductSelected(productChosenFound)
    console.log('el chosen product SETEADO FUE -->', productSelected)
    setIsLoading(false)
  },[productId])

  return (
    <>
      { isLoading?
        <ActivityIndicator/>
        :
        <>
          {/* <Header title={`${productSelected.title}`}/> */}
          <ScrollView style={styles.productDetailsContainer}>  
              <View style={styles.imageContainer}>   
              <Image
                source={{uri: productSelected.images[0]}}
                resizeMode='cover'
                style={styles.productImagePortrait}
              />
              </View> 
              <View style={styles.productSpecificsContainer}>
                <Text style={styles.productName}>{productSelected.title}</Text>
                <Text style={styles.productDesc}>{productSelected.description}</Text>
                <Text style={styles.productPrice}>${productSelected.price}</Text>
                <TouchableOpacity>
                  <Text style={styles.buyButtonPortrait}>Comprar</Text>
                </TouchableOpacity>
              </View>
          
          </ScrollView>
        </>
      }
    </>   
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  productDetailsContainer:{
    backgroundColor: colors.lightYellow,    
  },
  imageContainer:{
    minWidth: 300,
    width:'90%',
    height: 350,
    marginVertical: 25,
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 10,
  },
  productImagePortrait:{
    minWidth: 300,
    width:'100%',
    height: 345,
   
    alignSelf: 'center',
    borderRadius: 8,
  },
  productSpecificsContainer:{
    alignItems: 'center',
    backgroundColor: colors.mintSoft,
    padding: 18,
    marginHorizontal:20,
    marginBottom: 15,
    borderRadius:5,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 5,    
  },
  productName:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    textTransform: 'capitalize'
  },
  productDesc:{
    fontFamily: 'Poppins-Light',
    textTransform: 'capitalize'
  },
  productPrice:{
    fontFamily: 'Poppins-SemiBold'
  },
  buyButtonPortrait:{
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: colors.callToActionA,
    padding: 10,
    minWidth: 100,
    textAlign: 'center',
    borderRadius: 8
  }
})