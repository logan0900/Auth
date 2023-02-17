import React, {useState, useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthButton, Tost} from '../../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Images, theme} from '../../../constants';

const OTP = props => {
  const [state, setState] = useState({
    otp: '',
    Saved_OTP: '',
    loader: false,
  });
  const [state1, setState1] = useState({
    counter: 30,
  });

  const UserData = props?.route?.params?.userData;
  const forgetEmail = props?.route?.params?.email;

  useEffect(() => {
    if (state1.counter > 0) {
      let value = setTimeout(
        () => setState1({...state1, counter: state1.counter - 1}),
        1000,
      );
      // return  value
    }
  }, [state1.counter]);

  const VerifyButton = () => {
    if (!state.otp) {
      Tost('Please fill the OTP.', '.', 'error');
    } else {
      setState({...state, loader: true});

      setTimeout(() => {
        forgetEmail
          ? props?.navigation?.navigate('changePassword')
          : props.navigation.navigate('login', {userData: UserData});
        setState({...state, loader: false});
      }, 1500);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.backgrounds.whiteBG}}>
       <StatusBar backgroundColor={'#FFF'} />
      {/* ====== Logo ====== */}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 100,
          width: '100%',
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Image source={Images.Pictures.otp} style={{height: 90, width: 100}} />
      </View>

      <Text
        style={{
          fontSize: 14,
          letterSpacing: 1,
          textAlign: 'center',
          color: '#1F1F1F',
        }}>
        Code has been sent to registered email
      </Text>

      <Text
        style={{
          fontSize: 14,
          letterSpacing: 1,
          textAlign: 'center',
          color: '#1F1F1F',
        }}>
        {UserData ? UserData?.email : forgetEmail}
      </Text>

      <Text
        style={{
          fontSize: 14,
          letterSpacing: 1,
          textAlign: 'center',
          color: '#000',
          marginTop: 30,
        }}>
        Please enter 4 digit code
      </Text>

      {/* ========== OTP ========== */}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'red',
        }}>
        {console.log('CHECKING OTP:', state.otp)}
        <OTPInputView
          pinCount={4}
          onCodeFilled={text => setState({...state, otp: text})}
          // onCodeFilled={text => setState({...state, otp: text})}
          codeInputFieldStyle={{
            borderRadius: 8,
            height: 50,
            width: 50,
            fontSize: 20,
            backgroundColor:
              state.otp.length >= 0
                ? theme.backgrounds.whiteBG
                : theme.backgrounds.grayBG2,
            marginRight: 5,
            color: theme.textColors.text,
            // borderWidth: 0.4,
            // borderColor: theme.bordersColor.borderColor,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
          secureTextEntry={false}
          autoFocusOnLoad={true}
          style={{
            width: '75%',
            height: 95,
            alignSelf: 'center',
            // backgroundColor: 'teal',
          }}
          codeInputHighlightStyle={{
            color: theme.textColors.text,
            fontSize: 15,
          }}
          // placeholderCharacter={''}
          placeholderTextColor={theme.textColors.grayText}
        />
      </View>

      {/* ========== Counter ========== */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: theme.textColors.text,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {state1.counter}
        </Text>
      </View>

      {/* ========== ReSendOTP ==========  */}

      <View
        style={{
          width: '90%',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: '#707070',
            fontSize: 12,
          }}>
          Didn’t receive code?
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={state1.counter == 0 ? false : true}
            onPress={() => {
              setState1({...state1, counter: 30});
            }}>
            <Text
              style={{
                color:
                  state1.counter == 0
                    ? '#1E8EF5'
                    : theme.textColors.liteGrayText,
                fontWeight: 'bold',
                top: 4,
                left: 3,
              }}>
              Resend
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* ========== VerifyButton ========== */}

      <View
        style={{
          paddingVertical: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <AuthButton
          title={'Verify'}
          onPress={() => {
            VerifyButton();
          }}
          loader={state.loader}
          primaryButton
        />
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({});
