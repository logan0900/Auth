import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Tost } from '../../../components';
import {Images} from '../../../constants';

const Success = props => {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation.replace('HomeStack');
      Tost('Welcome Again.', '.', 'success');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor={'#FFF'} />
      <View
        style={{
          height: '50%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <FastImage
          source={Images.Pictures.success}
          style={{height: 185, width: 260}}
        />
        <Text
          style={{
            width: 280,
            letterSpacing: 1,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Your password has been changed successfully
        </Text>
      </View>
    </View>
  );
};

export default Success;
