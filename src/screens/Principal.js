import * as React from 'react';
import { Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Home } from '.';
import {MateriaMat} from '.'
  

const Tab = createBottomTabNavigator();

function Perfil() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Perfil!</Text>
      </View>
    );
  }

export default function Principal() {
    return(
        <Tab.Navigator
           activeColor= '#999'
           inactiveColor = '#fff'
           tabBarActiveBackgroundColor = '#333'
            >
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:({color, size}) => (
                     <MaterialCommunityIcons name ="home" color={color} size = {size} />          
                    ),
                }}
                />
                <Tab.Screen
                    name= "Matérias"
                    component={MateriaMat}
                    options={{
                    tabBarLabel:'Matérias',
                    tabBarIcon:({color, size}) => (
                     <MaterialCommunityIcons name ="book" color={color} size = {size} />          
                    ),
                }}
                />
                 <Tab.Screen
                    name= "Forum"
                    component={Perfil}
                    options={{
                    tabBarLabel:'Forum',
                    tabBarIcon:({color, size}) => (
                     <MaterialCommunityIcons name ="comment" color={color} size = {size} />          
                    ),
                }}
                />
            
            </Tab.Navigator>

    );
}
