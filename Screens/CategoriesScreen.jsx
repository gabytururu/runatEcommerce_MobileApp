import { StyleSheet, Text, View, FlatList} from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItemWrapper from '../components/CategoryItemWrapper'
import { colors } from '../global/colors'

//const CategoriesScreen = ({onSelectCategoryEvent}) => {
const CategoriesScreen = ({navigation}) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItemWrapper
      category={item}
      // onSelectCategoryEvent={onSelectCategoryEvent}
      navigation={navigation}
    />
  )

  return (
    <>
      {/* <Header title="Categorías de Producto"/> */}
      <View style={styles.flatListContainer}>
        <FlatList
          data={categories_data}
          renderItem={renderCategoryItem}
          keyExtractor={item=>item}
          numColumns={2} 
          // contentContainerStyle={styles.contentContainer}
        />
      </View>
     
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  flatListContainer:{
    flex:1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.clear,
    marginTop: 0,    
  },
  // contentContainer:{
  //   flexGrow: 1,
  //   justifyContent: 'center'
  // }

})

