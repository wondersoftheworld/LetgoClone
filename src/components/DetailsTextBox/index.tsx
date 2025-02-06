import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome, } from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function index({ price, name, description }: { price: number, name: string, description?: string }) {
    return (
        <View>
            <View style= {{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginRight:'2%' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="turkish-lira" size={24} color="black" />
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}> {price} </Text>
                </View>

                <View style= {{width:46,height:46, backgroundColor:'F1F1F1', flexDirection:'row', alignItems:'center', justifyContent:'center' }} >
                    <AntDesign name="hearto" size={24} color='#9E9E9E' />
                </View>
            </View>
            <Text style= {{fontSize:22, fontWeight:'600', marginTop:5}}>{name}</Text>
            <View style= {{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:15}}>

                <View style= {{flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons style= {{}} name="local-fire-department" size={24} color="#FF3E55" />
                    <Text style= {{color:"#FF3E55", marginLeft:3}}>58 dk</Text>
                </View>
                <View style= {{flexDirection:'row', alignItems:'center', justifyContent: 'center', marginLeft:5, width:'15%', backgroundColor:'#F3F3F3', borderRadius:13 ,paddingHorizontal:7, paddingVertical:5}}>
                    <AntDesign style={{ }} name="eye" size={24} color="black" />
                    <Text style= {{color:'9E9E9E'}}>14</Text>
                </View>
            </View>
            <Text style={{marginTop:26}}>
                {description}
            </Text>
            
        </View>
    )
}

export default index