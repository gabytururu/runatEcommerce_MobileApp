import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions = {{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabNavigator,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({focused}) =>(
                            <Entypo name="shop" size={24} color={focused? colors.primary : colors.mintSoft}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({focused}) =>(
                            <Entypo name="shopping-cart" size={24} color={focused? colors.primary : colors.mintSoft}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="OrdersStack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: ({focused}) =>(
                            <Octicons name="list-unordered" size={24} color={focused? colors.primary : colors.mintSoft}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    
})