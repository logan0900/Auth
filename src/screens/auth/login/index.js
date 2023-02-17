import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
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
    email: '',
    password: '',
    loader: false,
    eye: true,
  });

  function LoginButton() {
    let data = {
      email: isState.email?.toLowerCase()?.trim(),
      password: isState.password?.trim(),
    };
    console.log('user login data', data);
    if (!isState.email || !isState.password) {
      Tost('Please Fill In All Required Fields.', '.', 'error');
    } else {
      setState({...isState, loader: true});

      setTimeout(() => {
        props.navigation.replace('HomeStack', {userData: data});
        setState({...isState, loader: false});
        Tost('Login Successfull.', '.', 'success');
      }, 1500);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: theme.backgrounds.whiteBG}}>
      <StatusBar backgroundColor={'#FFF'} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {/* ====== Logo ====== */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 100,
            width: '100%',
          }}>
          <Image
            source={Images.Pictures.logo}
            style={{height: 80, width: 100}}
          />
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

        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 12,
              color: theme.textColors.gray2Text,
              fontWeight: '500',
              marginTop: 20,
            }}>
            Email
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={theme.textColors.liteGrayText}
            keyboardType="email-address"
            value={isState.email}
            style={Styles.emailInput}
            onChangeText={text => {
              setState({...isState, email: text});
            }}
          />
          <Text
            style={{
              fontSize: 12,
              color: theme.textColors.gray2Text,
              fontWeight: '500',
              marginTop: 20,
            }}>
            Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 42,
              backgroundColor: '#F9F9F9',
              borderRadius: 5,
              marginVertical: 5,
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={theme.textColors.liteGrayText}
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
                backgroundColor: '#F9F9F9',
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
            backgroundColor: '#FFF',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate('forgotPassword');
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
            onPress={() => LoginButton()}
            loader={isState.loader}
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
              props.navigation.replace('HomeStack');
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

        {/* ========== Continue With ========== */}

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 10,
          }}>
          <View
            style={{
              width: '35%',
              backgroundColor: theme.bordersColor.grayBorder,
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
              backgroundColor: theme.bordersColor.grayBorder,
              height: 1,
            }}></View>
        </View>

        {/* ========== Social ========== */}

        <View
          style={{
            height: 50,
            width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 34,
              width: 34,
            }}>
            <Image
              source={Images.iconImages.google}
              style={{height: 34, width: 34}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 34,
              width: 34,
            }}>
            <Image
              source={Images.iconImages.facebook}
              style={{height: 34, width: 34}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 38,
              width: 38,
            }}>
            <Image
              source={Images.iconImages.apple}
              style={{height: 38, width: 38}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default Login;
