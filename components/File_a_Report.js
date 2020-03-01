import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, CheckBox} from 'react-native';

    function File_a_Report(navigation) {
    return (
      <View style={styles.container}>
      <View style={{ padding: 15, backgroundColor: 'springgreen', alignItems: 'baseline',flexDirection: 'row'}}>
      <Button title="File a Report" />
      <Button title="How it Works" />
      <Button title="Dashboard"/>
      </View>
      <Text >Sumit an image</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Image 
      style={{width: 250, height: 180}} 
      source={{url: 'http://sv.cms.coopwebbuilder2.com/sites/sv/files/images/tree_on_line_0-300x225.jpg'}}
      />
      <Text style={{color: 'red'}}>Required *</Text>
      <TextInput 
      placeholder="Location"
      style={styles.input} 
    //   onChangeText={goalInputHandler}
    //   value={enterdedGoal}
      />
      <Text />
      <TextInput 
      placeholder="Select Closest Utility Company"
      style={styles.input} 
      />
      <Text />
      <TextInput 
      placeholder="Contact Name"
      style={styles.input} 
      />
      <Text />
      <TextInput 
      placeholder="Email"
      style={styles.input} 
      />
      <Button title='Sumit' />
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
    input: {
        width: '80%',
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10    
    },
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
    }
  });

  export default File_a_Report