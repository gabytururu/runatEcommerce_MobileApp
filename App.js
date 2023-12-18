
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import { colors } from './global/colors';
import CategoriesScreen from './Screens/CategoriesScreen'
import ProductsByCatScreen from './Screens/ProductsByCatScreen'
import {useState} from 'react'
import ProductDetailScreen from './Screens/ProductDetailScreen';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  console.log('la categoría desde el useState fuera de funcion es-->', categorySelected)
  const onSelectCategory = (category) =>{
    setCategorySelected(category)
  }

  const [productIdSelected, setProductIdSelected] = useState(null)
  
  const onSelectProductId = (productId) =>{
    setProductIdSelected(productId)
  }
  console.log('el id selected FUERA DE FUNCION fue-->',productIdSelected)

  const [fontLoaded] = useFonts({
    'MeowScript': require('./assets/fonts/MeowScript-Regular.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf')
  })

  if(!fontLoaded) return <View style={styles.spinnerContainer}>
                          <ActivityIndicator style={styles.fontLoadSpinner} size={'large'} />
                          <Text style={styles.fontLoadText}>Cargando Fonts...</Text>    
                        </View>
  return (
     <>

    { productIdSelected?
      <ProductDetailScreen productIdSelected = {productIdSelected}/>
        :
      categorySelected? 
        <ProductsByCatScreen categorySelected = {categorySelected} onSelectProductIdEvent={onSelectProductId}/>
        :
        <CategoriesScreen  onSelectCategoryEvent = {onSelectCategory}/>      
    } 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clear,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'MeowScript',
    fontSize:35
  },
  spinnerContainer:{
    height:200,  
    alignSelf: 'center', 
    textAlign: 'center',
    backgroundColor: colors.primary,
    width: '80%',
    borderRadius:8,
    margin: 20,
    padding: 15

  },
  fontLoadSpinner:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 2 }],
    color: '#ffffff' // <-- por qué no funciona salvo que vaya en inline??
    
  },
  fontLoadText:{
    color: colors.clear,
    textAlign: 'center'
  }
});

