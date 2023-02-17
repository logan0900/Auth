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
import {AuthButton, Tost, DropdownComponent} from '../../../components';
import Entypo from 'react-native-vector-icons/Entypo';
import {Images, theme} from '../../../constants';
import {CheckBox} from 'react-native-elements';

const Signup = props => {
  const [isState, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    number: '',
    picker: 'Select',
    pickerOptions: ['Facebook', 'Instagram', 'Friend', 'Other'],
    check: false,
    loader: false,
    eye: true,
  });

  const SignupButton = () => {
    let data = {
      firstName: isState.firstName,
      lastName: isState.lastName,
      email: isState.email,
      password: isState.password?.trim(),
      number: isState.number,
    };
    if (
      !isState.firstName ||
      !isState.lastName ||
      !isState.email ||
      !isState.password ||
      !isState.picker
    ) {
      Tost('Please Fill In All Required Fields.', '.', 'error');
    } else {
      setState({...isState, loader: true});

      setTimeout(() => {
        props.navigation.navigate('otp', {userData: data});
        setState({...isState, loader: false});
      }, 1500);
    }
  };
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
            Sign Up
          </Text>
        </View>

        {/* ========== Inputs ========== */}

        <View style={{width: '90%', alignSelf: 'center'}}>
          {/* ========== NameRow ========== */}

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* ========== FirstName ========== */}

            <View style={{width: '48%'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: theme.textColors.gray2Text,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                First Name
              </Text>
              <TextInput
                placeholder="John"
                // keyboardType="email-address"
                value={isState.firstName}
                style={{
                  color: theme.textColors.blackText,
                  height: 42,
                  backgroundColor: '#F9F9F9',
                  borderRadius: 5,
                  paddingLeft: 15,
                  marginVertical: 5,
                }}
                onChangeText={text => {
                  setState({...isState, firstName: text});
                }}
              />
            </View>

            {/* ========== LastName ========== */}

            <View style={{width: '48%'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: theme.textColors.gray2Text,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                First Name
              </Text>
              <TextInput
                placeholder="Smith"
                // keyboardType="ascii-capable"
                value={isState.lastName}
                style={{
                  color: theme.textColors.blackText,
                  height: 42,
                  backgroundColor: '#F9F9F9',
                  borderRadius: 5,
                  paddingLeft: 15,
                  marginVertical: 5,
                }}
                onChangeText={text => {
                  setState({...isState, lastName: text});
                }}
              />
            </View>
          </View>

          {/* ========== Email ========== */}

          <>
            <Text
              style={{
                fontSize: 12,
                color: theme.textColors.gray2Text,
                fontWeight: '500',
                marginTop: 5,
              }}>
              Email
            </Text>
            <TextInput
              placeholder="john@gmail.com"
              keyboardType="email-address"
              value={isState.email}
              style={Styles.emailInput}
              onChangeText={text => {
                setState({...isState, email: text});
              }}
            />
          </>

          {/* ========== Password ========== */}

          <>
            <Text
              style={{
                fontSize: 12,
                color: theme.textColors.gray2Text,
                fontWeight: '500',
                marginTop: 5,
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
                placeholder="********"
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
          </>

          {/* ========== PhoneNumber ========== */}

          <>
            <Text
              style={{
                fontSize: 12,
                color: theme.textColors.gray2Text,
                fontWeight: '500',
                marginTop: 5,
              }}>
              Contact Number
            </Text>
            <TextInput
              placeholder="12345 7841 123"
              keyboardType="number-pad"
              style={Styles.emailInput}
              value={isState.number}
              onChangeText={text => {
                setState({...isState, number: text});
              }}
            />
          </>

          {/* ========== Picker ========== */}

          <>
            <Text
              style={{
                fontSize: 12,
                color: theme.textColors.gray2Text,
                fontWeight: '500',
                marginTop: 5,
              }}>
              How did you find us?
            </Text>
            <DropdownComponent
              value={isState.picker}
              options={isState.pickerOptions}
              onSelect={(index, value) =>
                setState({
                  ...isState,
                  categoryValue: value,
                })
              }
            />
          </>
        </View>

        {/* ========== CheckBox ========== */}

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 5,
          }}>
          <View style={{width: '10%'}}>
            <CheckBox
              checkedColor={theme.primaryColor}
              checked={isState.check}
              onPress={() => setState({...isState, check: !isState.check})}
              containerStyle={{
                paddingLeft: 5,
                marginLeft: 0,
              }}
            />
          </View>
          <View style={{width: '90%', paddingTop: 3}}>
            <Text style={{letterSpacing: 1}}>
              Keep me updated with special offers, exciting products and news
            </Text>
          </View>
        </View>

        {/* ========== SignupButton ========== */}

        <View
          style={{
            paddingVertical: 10,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AuthButton
            title={'Signup'}
            onPress={() => SignupButton()}
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
            Already Have An Account?
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
                Login
              </Text>
            </TouchableOpacity>
          </Text>

          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              props.navigation.navigate('HomeStack');
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
            width: '44%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
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

export default Signup;
