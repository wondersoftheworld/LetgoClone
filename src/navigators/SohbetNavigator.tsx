import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SohbetScreen from "../screens/SohbetScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Octicons, Entypo } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
const Stack = createStackNavigator();
function SohbetNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SohbetScreen}
        options={{
          headerStyle: { backgroundColor: "#F1F1F1" },
          headerTitle: () => (
            <Text style={{ fontSize: 16 }}>Sohbet - Hepsi</Text>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center",marginRight:18 }}>
              <Feather style={{marginRight:'10%'}} name="settings" size={24} color="black" />
              <Entypo name="dots-three-horizontal" size={24} color="#969696" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default SohbetNavigator;