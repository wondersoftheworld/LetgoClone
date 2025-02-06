import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import ImageCarousel from '../../components/ImageCarousel'
import DetailsTextBox from '../../components/DetailsTextBox'
import SellerProfile from '../../components/SellerProfile'
import MappingComponent from '../../components/MappingComponent'
import SocialMedias from '../../components/SocialMedias'
import MessageBox from '../../components/MessageBox'
import { Product } from '../../models'

function index(props) {
    const [product, setProduct] = useState<Product>(props.route.params.product)

    return (

        <View style= {{flex:1}}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1, backgroundColor: 'white', marginLeft: 0, marginRight: 0, marginBottom:'35%', paddingLeft: 0, paddingRight: 0, overflow: 'hidden' }}
            >
                {/* Image Carousel */}
                <ImageCarousel images={product.images} />
                <View style={{ paddingHorizontal: 20, paddingVertical: 10, overflow: 'hidden' }}>
                    <DetailsTextBox price={product.price} name={product.name} description={product.description} />
                    <SellerProfile averageRating={product.rating} />
                    <MappingComponent />
                    <SocialMedias />
                </View>
                </ScrollView>
                <MessageBox />
        </View>


    )
}

export default index
