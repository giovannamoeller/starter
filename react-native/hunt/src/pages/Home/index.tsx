import React, { useState, useEffect } from "react";
import Constants from 'expo-constants';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

interface Product {
  _id: string;
  title: string;
  description: string;
}

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);

  function handleProductNavigation(id: string) {
    navigation.navigate("Product", { id });
  }

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data.docs);
    });
  }, []);

  console.log(products);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} alwaysBounceVertical>
        {products.map((product) => (
          <View style={styles.product} key={product._id}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity
              onPress={() => handleProductNavigation(product._id)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Ver produto</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
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

export default Home;
