import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import {AuthButton, Tost} from '../../../components';
import Entypo from 'react-native-vector-icons/Entypo';
import {Images, theme} from '../../../constants';

const ChangePassword = props => {
  const [isState, setState] = useState({
    password: '',
    confrimPassword: '',
    loader: false,
    eye: true,
  });

  function NextButton() {
    let data = {
      password: isState.password?.trim(),
      confrimPassword: isState.confrimPassword?.trim(),
    };
    console.log('user login data', data);
    if (!isState.password || !isState.confrimPassword) {
      Tost('Please fill the required fields.', '.', 'info');
    } else if (isState.password.length < 3) {
      Tost('Password must be at least 3 characters', '.', 'info');
    } else if (isState.password !== isState.confrimPassword) {
      Tost('Please Enter Same Password.', '.', 'error');
    } else {
      setState({...isState, loader: true});

      setTimeout(() => {
        props.navigation.navigate('success', {userData: data});
        setState({...isState, loader: false});
      }, 1500);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: theme.backgrounds.whiteBG}}>
      <StatusBar backgroundColor={'#FFF'} />
      {/* ====== Header ====== */}

      <View
        style={{
          width: '90%',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            color: '#1F1F1F',
            fontWeight: '600',
          }}>
          New Password
        </Text>
      </View>

      {/* ========== Inputs ========== */}

      <View style={{marginTop: 20}}>
        <View
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
            style={Styles.passwordInput}
            value={isState.password}
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
              color={!isState.eye ? '#1F1F1F' : theme.iconsColor.eyeIcon}
              size={17}
            />
          </TouchableOpacity>
        </View>

        <View
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
            placeholder="Confrim Password"
            secureTextEntry={isState.eye}
            style={Styles.passwordInput}
            value={isState.confrimPassword}
            onChangeText={text => {
              setState({...isState, confrimPassword: text});
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
              color={!isState.eye ? '#1F1F1F' : theme.iconsColor.eyeIcon}
              size={17}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ========== NextButton ========== */}

      <View
        style={{
          paddingVertical: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10
        }}>
        <AuthButton
          title={'Next'}
          onPress={() => NextButton()}
          loader={isState.loader}
          primaryButton
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  emailInput: {
    width: '100%',
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
    width: '90%',
    height: 42,
    paddingLeft: 15,
    color: '#000',
  },
});

export default ChangePassword;
