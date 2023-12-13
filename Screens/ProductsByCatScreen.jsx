import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import {useState, useEffect} from 'react'
import products_data from '../data/products_data.json'
import SearchInput from '../components/SearchInput'
import ProductItem from '../components/ProductItem'

const ProductsByCatScreen = ({categorySelected}) => {
  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')
  useEffect(()=>{
    const productsFilteredByCategory = products_data.filter(prod => prod.category === categorySelected)
    console.log('los products by Category-->', productsFilteredByCategory )
    const productsFilteredSearch = productsFilteredByCategory.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFilteredSearch)
  },[categorySelected, search])

  const onSearch=(search)=>{
    setSearch(search)
  }

  const renderProductItem =({item}) =>(
    <ProductItem product={item}/>
  )

  return (
    <>
    <Header title={'Detalles del Producto'}/>
    <SearchInput onSearchHandlerEvent={onSearch}/>
    <FlatList
      data={productsByCategory}
      renderItem={renderProductItem}
      keyExtractor={item=>item.id}
    />
    </>
  )
}

export default ProductsByCatScreen

const styles = StyleSheet.create({})