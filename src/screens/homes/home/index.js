import React from 'react';
import {Text, View} from 'react-native';

const Home = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 40}}>Home Screen</Text>
      </View>
    </View>
  );
};

export default Home;
