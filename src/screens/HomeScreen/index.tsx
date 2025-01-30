import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import productassets from '../../../assets/products';
import FavoriteProducts from '../../components/FavoriteProducts';
import MainProducts from "../../components/MainProducts"
import { Product } from '../../models/index';
import styles from './styles';

function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productassets);
  }, []);

  return (
    <ScrollView style={{backgroundColor:'white',height:'100%'}}>
      <FavoriteProducts/>
      <MainProducts filtered={false} header={"Pendik"} mainProducts={products} />
    </ScrollView>
  );
}

export default Index;