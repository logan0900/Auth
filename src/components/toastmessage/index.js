import Toast from 'react-native-toast-message';

const Tost = (text1, text2, type, position, topOffset) => {
  Toast.show({
    type: type,
    position: position ? position : 'top',
    text1: text1,
    text2: text2,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: topOffset ? topOffset : 30,
    bottomOffset: 40,
  });
};
export {Tost};
