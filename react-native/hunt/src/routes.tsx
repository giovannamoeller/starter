import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Product from './pages/Product';


export default function Routes() {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Home',
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: '#7159c1'
                        }
                    }}/>
                <Stack.Screen name="Product" component={Product}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}