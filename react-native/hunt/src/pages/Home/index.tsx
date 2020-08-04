import React, { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';


const Home = () => {
    const navigation = useNavigation();

    function handleProductNavigation() {
        navigation.navigate('Product');
    }

    useEffect(() => {
        api.get('/products').then(response => {
            console.log(response.data.docs);
        });
    }, []);

    return (
        <View>
            <Text>Página Home</Text>
            <Button
                onPress={handleProductNavigation}
                title="produto"
                color="pink"
            />
        </View>
    )
}

export default Home;