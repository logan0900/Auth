import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthButton, Tost} from '../../../components';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Images, theme} from '../../../constants';

const ForgotPassword = props => {
  const [isState, setState] = useState({
    email: '',
    password: '',
    device_token: '',
    eye: true,
  });

  function LoginButton() {
    let data = {
      email: isState.email?.toLowerCase()?.trim(),
      password: isState.password?.trim(),
      device_token: isState.device_token,
    };
    console.log('user login data', data);
    if (!isState.email || !isState.password) {
      Tost('Please Fill In All Required Fields.', '.', 'error');
    } else {
      // props?.SIGN_IN(data, props?.navigation);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: theme.backgrounds.whiteBG}}>
      {/* ====== Header ====== */}

      <View
        style={{
          width: '90%',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.7}
          style={{
            height: 30,
            width: '10%',
            justifyContent: 'center',
          }}>
          <Fontisto name="arrow-left-l" size={23} color={'#1F1F1F'} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 24,
            color: '#1F1F1F',
            fontWeight: '600',
          }}>
          Forgot Password
        </Text>
      </View>

      {/* ========== Inputs ========== */}

      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={isState.email}
          style={Styles.emailInput}
          onChangeText={text => {
            setState({...isState, email: text});
          }}
        />
        {/* <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 42,
            backgroundColor: '#F9F9F9',
            borderRadius: 5,
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <TextInput
            placeholder="Password"
            secureTextEntry={isState.eye}
            value={isState.password}
            style={Styles.passwordInput}
            onChangeText={text => {
              setState({...isState, password: text});
            }}
          />
          <TouchableOpacity
            onPress={() => setState({...isState, eye: !isState.eye})}
            style={{
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo
              name={!isState.eye ? 'eye' : 'eye-with-line'}
              color={theme.iconsColor.eyeIcon}
              size={17}
            />
          </TouchableOpacity>
        </View> */}
      </View>

      {/* ========== NextButton ========== */}

      <View
        style={{
          paddingVertical: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AuthButton
          title={'Next'}
          onPress={() =>
            props?.navigation?.navigate('otp', {email: isState.email})
          }
          // loader={props?.loader}
          primaryButton
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  emailInput: {
    width: '90%',
    height: 42,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    alignSelf: 'center',
    paddingLeft: 15,
    marginVertical: 5,
    color: '#000',
  },
  passwordInput: {
    backgroundColor: '#F9F9F9',
    width: '80%',
    height: 42,
    paddingLeft: 15,
    color: '#000',
  },
});

export default ForgotPassword;
