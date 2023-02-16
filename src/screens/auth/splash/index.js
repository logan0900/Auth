import React, {useEffect, useState} from 'react';
import {Image, View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images, theme} from '../../../constants';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
props.navigation.navigate('login')
    }, 1500);
  }, []);

  const [isState, setState] = useState({
    isAuth: false,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgrounds.whiteBG,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        backgroundColor={theme.backgrounds.whiteBG}
        barStyle={'dark-content'}
      />
      <View
        style={{
          alignItems: 'center',
          height: '30%',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            width: 200,
          }}>
          <Image
            source={Images.Pictures.logo}
            style={{height: 162, width: 200}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Splash;
