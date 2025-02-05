import React, {useState} from 'react'
import {View, ScrollView, Text} from 'react-native'
import ImageCarousel from '../../components/ImageCarousel'
import {Product} from '../../models'

function index(props) {
    const [product, setProduct] = useState<Product>(props.route.params.product)

    return (
        <ScrollView style={{flex:1, backgroundColor:'white'}}>
            {/* Image Carousel */}
            <ImageCarousel images={product.images}/>
        </ScrollView>
    )
}

export default index
