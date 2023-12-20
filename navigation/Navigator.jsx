import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from '../Screens/CategoriesScreen'
import ProductDetailScreen from '../Screens/ProductDetailScreen'
import ProductsByCatScreen from '../Screens/ProductsByCatScreen'

import Header from '../components/Header'
import { colors } from '../global/colors'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='categories'
            screenOptions={
                ({navigation,route}) =>({
                    //header: () =>  <Header title={route.name} navigation={navigation}/>
                    header: () => {
                        const title = route.options?.title || route.name
                        return <Header title={title} navigation={navigation}/>
                    } 
                })
            }
        >            
            <Stack.Screen
                name='categories'
                component={CategoriesScreen}
                // options={{title: 'Categorías'}}
                // initialParams={{screenTitle: 'Categorías'}}
            />
            <Stack.Screen
                name='productsByCategory'
                component={ProductsByCatScreen}
                options={{title: 'Productos'}}
                // initialParams={{screenTitle: 'Productos'}}
            />
            <Stack.Screen
                name='productDetails'
                component={ProductDetailScreen}
                options={{title: 'Detalles del Producto'}}
            //    initialParams={{screenTitle: 'Tu Producto'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
const styles = StyleSheet.create({})