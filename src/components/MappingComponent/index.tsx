import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

function Index() {
  return (
    <View style={{ overflow: 'hidden' }}>  {/* Haritayı saran View */}
      <MapView
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: height * 0.19,
          marginTop: 18,
          borderRadius: 12,
          overflow: 'hidden',  // Siyah çizgiyi tamamen engellemek
          width: '100%' 
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: height * 0.044,
          marginTop: -height * 0.04,
          borderColor: '#a6a6a6',
          borderBottomWidth: 0.2,
          borderRightWidth: 0.2,
          borderLeftWidth: 0.2,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          backgroundColor: 'white',
        }}
      >
        <Text style={{ paddingHorizontal: 16 }}>34890, Pendik</Text>
      </View>
    </View>
  );
}

export default Index;
