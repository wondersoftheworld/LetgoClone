import React , {useEffect,useState} from 'react'
import {ScrollView} from "react-native"
import productassets from "../../../assets/products"
import {Category, Product} from "../../models/index"
import MainProducts from "../../components/MainProducts"
import MessageNotification from "../../components/MessageNotification"
function index() {
     const [products, setProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        setProducts(productassets);
      }, []);

  return (
    <ScrollView style={{backgroundColor:'white',height:'100%'}}>
           <MessageNotification />
           <MainProducts mainProducts={products} filtered={true} header={"Arama sonuçları (1041464)"} />
    </ScrollView>
    )
}
export default index