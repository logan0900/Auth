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
import {Images, theme} from '../../../constants';

const Login = props => {
  const [isState, setState] = useState({
    email: 'abc@g.com',
    password: '123',
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
      {/* ====== Logo ====== */}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 100,
          width: '100%',
        }}>
        <Image source={Images.Pictures.logo} style={{height: 80, width: 100}} />
      </View>

      {/* ====== LoginText ====== */}

      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            color: '#1F1F1F',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </View>

      {/* ========== Inputs ========== */}

      <View>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={isState.email}
          style={Styles.emailInput}
          onChangeText={text => {
            setState({...isState, email: text});
          }}
        />
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
        </View>
      </View>

      {/* ========== Forget Password ========== */}

      <View
        style={{
          width: '90%',
          alignItems: 'flex-end',
          paddingVertical: 15,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            // props.navigation.navigate('Auth', {screen: 'ForgetPassword'});
          }}>
          <Text
            style={{
              color: '#1E8EF5',
              fontWeight: 'bold',
              top: 4,
              left: 3,
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* ========== LoginButton ========== */}

      <View
        style={{
          paddingVertical: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AuthButton
          title={'Login'}
          // onPress={() => LoginButton()}
          // loader={props?.loader}
          primaryButton
        />
      </View>

      {/* ========== DontHaveAnAccount ==========  */}

      <View
        style={{
          width: '90%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: '#707070',
            fontSize: 12,
          }}>
          Don't Have An Account?
          <TouchableOpacity
            style={{}}
            onPress={() => {
              props.navigation.navigate('signup');
            }}>
            <Text
              style={{
                color: '#1E8EF5',
                fontWeight: 'bold',
                top: 4,
                left: 3,
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            props.navigation.navigate('signup');
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: '#FF9E2C',
              fontWeight: '600',
            }}>
            Continue as guest
          </Text>
        </TouchableOpacity>
      </View>

      {/* ========== Privacy Policy ========== */}

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '35%',
            backgroundColor: theme.textColors.gray2Text,
            height: 1,
          }}></View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: theme.textColors.gray2Text,
            fontWeight: '600',
          }}>
          Continue with
        </Text>
        <View
          style={{
            width: '35%',
            backgroundColor: theme.textColors.gray2Text,
            height: 1,
          }}></View>
      </View>

      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: 'red',

          flexDirection: 'row',
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 100,
            width: '100%',
          }}>
          <Image
            source={Images.iconImages.google}
            style={{height: 44, width: 44}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 100,
            width: '100%',
          }}>
          <Image
            source={Images.iconImages.google}
            style={{height: 44, width: 44}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 100,
            width: '100%',
          }}>
          <Image
            source={Images.iconImages.google}
            style={{height: 44, width: 44}}
          />
        </TouchableOpacity>
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

export default Login;
