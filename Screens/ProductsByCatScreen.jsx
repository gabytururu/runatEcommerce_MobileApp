import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import SearchInput from '../components/SearchInput'
import ProductItem from '../components/ProductItem'
import {useSelector, useDispatch} from 'react-redux'

const ProductsByCatScreen = ({navigation, route}) => {
  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state=>state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)
  useEffect(()=>{
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