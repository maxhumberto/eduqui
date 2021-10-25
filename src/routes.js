import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from './screens/Dashboard'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Dashboard} />
    </Tab.Navigator>
  )
}
