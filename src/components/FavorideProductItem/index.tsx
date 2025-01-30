import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Product } from '../../models';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';

type ProductProps = {
    product: Product,
    prodType:string,
};

function Index({ product,prodType }: ProductProps) {
    return (
        <TouchableOpacity style={prodType==="Favorite"? styles.favorite: styles.main}>
            <View style={prodType==="Favorite"? styles.favoriteView :styles.mainView}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="stretch"
                    style={prodType==="Favorite"? styles.favoriteImage: styles.mainImg}
                />
                {prodType==="Favorite"&&(
                <View style= {styles.labeledFav}>
                    <Text style= {{fontSize:9,fontWeight:'500'}}>One Cikan</Text>
                </View>)
                }
                <TouchableOpacity>
                <AntDesign style={{position:'absolute',right:4,bottom:5}} name="heart" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default Index;