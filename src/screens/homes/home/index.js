import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {AuthButton} from '../../../components';

const Home = props => {
  const [isState, setState] = useState({
    loader: false,
  });
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 40}}>Home Screen</Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AuthButton
          title={'Logout'}
          onPress={() => {
            setState({...isState, loader: true});
            setTimeout(() => {
              props?.navigation.replace('Auth');
              setState({...isState, loader: false});
            }, 1500);
          }}
          loader={isState.loader}
          primaryButton
        />
      </View>
    </View>
  );
};

export default Home;
