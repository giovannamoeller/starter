import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking
} from "react-native";
import api from "../../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
  id: string;
}

interface Product {
  _id: number;
  title: string;
  description: string;
  url: string;
}

const Product = () => {
  const route = useRoute();
  const routeParams = route.params as Params;

  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    api.get(`/products/${routeParams.id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  function handleProductNavigation() {
      console.log(product.url);
      Linking.openURL(product.url);
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} alwaysBounceVertical>
        <View style={styles.product} key={product._id}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <TouchableOpacity
            onPress={handleProductNavigation}
            style={styles.button}>
            <Text style={styles.buttonText}>Acessar URL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
      padding: 32,
      paddingVertical: 30,
    },
  
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 20,
    },
  
    description: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
    },
  
    product: {
      backgroundColor: "white",
      marginBottom: 20,
      padding: 24,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.08,
      shadowRadius: 3,
      elevation: 5,
    },
  
    button: {
      backgroundColor: "#7159c1",
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 5,
      width: "50%",
    },
    buttonText: {
      color: "white",
    },
  });

export default Product;
