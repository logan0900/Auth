import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const AuthButton = ({
  onPress,
  title,
  titleColor,
  style,
  width,
  loader,
  loaderSize,
  loaderColor,
  primaryButton,
  grayButton,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        {
          height: 44,
          backgroundColor: primaryButton
            ? '#FF9E2C'
            : grayButton
            ? '#B8B8B8'
            : '#000000',
          width: width ? width : '90%',
          alignItems: 'center',
          borderRadius: 5,
          marginBottom: 10,
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        } || style,
      ]}>
      {loader ? (
        <ActivityIndicator
          size={loaderSize || 'large'}
          color={loaderColor || '#FFF'}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: grayButton ? '#000000' : '#FFF' || titleColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 44,
    backgroundColor: '#2F73FF',
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export {AuthButton};
