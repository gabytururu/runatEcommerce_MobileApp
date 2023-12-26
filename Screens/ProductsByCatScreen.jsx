import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import products_data from '../data/products_data.json'
import SearchInput from '../components/SearchInput'
import ProductItem from '../components/ProductItem'
import {useSelector, useDispatch} from 'react-redux'

const ProductsByCatScreen = ({navigation, route}) => {
  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')
  // const {category}  = route.params
  // console.log('route-->', route)
  // console.log('route.params-->', route.params)

  const category = useSelector(state=>state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)
  useEffect(()=>{
    // const productsFilteredByCategory = products_data.filter(prod => prod.category === category)
    // console.log('los products by Category-->', productsFilteredByCategory )
    const productsFilteredSearch = productsFilteredByCategory.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFilteredSearch)
  },[category, search])

  const onSearch=(search)=>{
    setSearch(search)
  }

  const renderProductItem =({item}) =>(
    <ProductItem product={item} navigation={navigation}/>
  )

  return (
    <>
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