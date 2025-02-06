import React from 'react'
import { Image, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native';

function index({averageRating}:{averageRating:number}) {
    return (
        <View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <View>
                    <Image style={{height:46,width:46,borderRadius:23}} source={{uri:"https://www.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg"}} />
                    <AntDesign 
                    style={{position:'absolute', bottom:-5, right:0}}
                    name="checkcircle" size={14} color="#A6CC71" />
                </View>
                <View style={{marginLeft:5}}>
                    <Text style={{fontWeight:'600', fontSize:16}}> Cenk Aktas</Text>
                    <View style={{flexDirection:'row',alignItems:'center',paddingTop:3}}>
                    {[0,0,0,0,0].map((el,i)=> (
                        <FontAwesome
                            key={i}
                            name="star"
                            size={16}
                            color={i<Math.floor(averageRating) ? "#FFD200": "#DFDFDF" }
                            style={{marginRight:2.5}}
                        />
                    ))}
                </View>
                </View>
            </View>
            <AntDesign name="right" size={24} color="black" />
        </View>
    )
}

export default index