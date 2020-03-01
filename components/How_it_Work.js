import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import File_a_Report from '../components/File_a_Report'


function How_it_Work({navigation}) {
    return ( 
        <View style={styles.container}>
          <View style={{ padding: 35, backgroundColor: 'springgreen', alignItems: 'baseline',flexDirection: 'row'}}>
          <Button title="File a Report" onPress={() => navigation.navigate('File a Report')}/>
          <Button title="How it Works"/>
          <Button title="Dashboard"/>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold',alignItems:'flex-start'}}>Our Goals:</Text>
          <Text>We want to help the community to mitigate the wildfire risk by relying on the strength of the community. If you spot any transmission lines landing next to tree branches, please take an image of it and submit it through the app. Our embedded technology with Google Place API and DocuSign will automatically send the data to the responsible party.</Text>
          <Image 
          style={{width: 250, height: 180}} 
          source={{url: 'http://sv.cms.coopwebbuilder2.com/sites/sv/files/images/tree_on_line_0-300x225.jpg'}}
          />
          <Text style={{fontWeight: 'bold'}}>How This Application Works:</Text>
          <Text>1) Submit an image by clicking the image placeholder</Text>
          <Image 
          style={{width: 250, height: 180}} 
          source={{url: 'http://sv.cms.coopwebbuilder2.com/sites/sv/files/images/tree_on_line_0-300x225.jpg'}}
          />
          <Text>2) Fill out the required information in the input forms.  If you are okay for us to contact you for the follow up, please check on the checkbox.</Text>
          </View>
          </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default How_it_Work