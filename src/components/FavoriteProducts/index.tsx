import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import productassets from '../../../assets/products';
import FavoriteProductItem from '../../components/FavorideProductItem';
import { Product } from '../../models/index';
import styles from './styles';

function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productassets);
  }, []);

  return (
    <View style={styles.productContanier}>
      {/* Render Header */}
      <View style={styles.titleProducts}>
        <Text style={styles.topicTitle}>
          Vitrin Ilanlari
          </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.detailTitle}>
            Hepsini gor
            </Text>
          {/* Arrow Isareti */}
          <AntDesign name="right" size={19} color="#F24E61" /> 
        </View>
      </View>
      {/* Render Favorite Products */}
      <ScrollView bounces={true} horizontal={true} showsHorizontalScrollIndicator={false}>
      {products.map((item) => {
          return <FavoriteProductItem  prodType='Favorite' key={item.id} product={item} />;
        })}
      </ScrollView>
    </View>
  );
}

export default Index;