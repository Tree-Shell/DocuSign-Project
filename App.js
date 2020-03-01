
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


// import React from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';

// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// // import {createStackNavigator} from '@react-navigation/stack';



// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//     </NavigationContainer>
//   );
// }

// import How_it_Work from './components/How_it_Work';
// import File_a_report from './components/File_a_Report';


// const Stack = NavigationContainer({
//   How_it_Work: { screen: How_it_Work},
//   File_a_report: { screen: File_a_report}
// });

// const App = NavigationContainer(Stack);

// export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={{ padding: 35, backgroundColor: 'springgreen', alignItems: 'baseline',flexDirection: 'row'}}>
//       <Button title="File a Report" />
//       <Button title="How it Works"/>
//       <Button title="Dashboard"/>
//       </View>
//       <View style={{ alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontWeight: 'bold',alignItems:'flex-start'}}>Our Goals:</Text>
//       <Text>We want to help the community to mitigate the wildfire risk by relying on the strength of the community. If you spot any transmission lines landing next to tree branches, please take an image of it and submit it through the app. Our embedded technology with Google Place API and DocuSign will automatically send the data to the responsible party.</Text>
//       <Image 
//       style={{width: 250, height: 180}} 
//       source={{url: 'http://sv.cms.coopwebbuilder2.com/sites/sv/files/images/tree_on_line_0-300x225.jpg'}}
//       />
//       <Text style={{fontWeight: 'bold'}}>How This Application Works:</Text>
//       <Text>1) Submit an image by clicking the image placeholder</Text>
//       <Image 
//       style={{width: 250, height: 180}} 
//       source={{url: 'http://sv.cms.coopwebbuilder2.com/sites/sv/files/images/tree_on_line_0-300x225.jpg'}}
//       />
//       <Text>2) Fill out the required information in the input forms.  If you are okay for us to contact you for the follow up, please check on the checkbox.</Text>
//       </View>
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
