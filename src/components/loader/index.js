import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

const Loader = props => {
  const {isLoading, loaderColor, loaderSize, loaderBackground, containerStyle} =
    props;

  return isLoading ? (
    <Modal visible={isLoading}>
      <View
        style={[
          styles.container,
          loaderBackground && {backgroundColor: loaderBackground},
          containerStyle,
        ]}>
        <ActivityIndicator
          size={loaderSize || 'large'}
          color={loaderColor || '#00ff00'}
        />
      </View>
    </Modal>
  ) : (
    <View></View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
