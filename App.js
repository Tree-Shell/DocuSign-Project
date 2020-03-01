import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import How_it_Work from './components/How_it_Work'
import File_a_Report from './components/File_a_Report'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='How it Work' component={How_it_Work} />
        <Stack.Screen name='File a Report' component={File_a_Report} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator

