import { StyleSheet, Text, View, FlatList} from 'react-native'
//import categories_data from '../data/categories_data.json'
import CategoryItemWrapper from '../components/CategoryItemWrapper'
import { colors } from '../global/colors'
import {useSelector} from 'react-redux'




const CategoriesScreen = ({navigation}) => {

  const categories = useSelector(state=>state.shopReducer.categories)
  const renderCategoryItem = ({item}) => (
    <CategoryItemWrapper
      category={item}
      navigation={navigation}
    />
  )

  return (
    <>
      <View style={styles.flatListContainer}>
        <FlatList
        //data={categories_data}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item=>item}
          numColumns={2} 
        />
      </View>     
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  flatListContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mintLight,
    marginTop: 0,    
  },
})

