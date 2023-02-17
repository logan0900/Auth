import React from 'react';
import 'react-native-gesture-handler';
import MyStack from './src/navigations/stack';
import Toast from 'react-native-toast-message';
const App = props => {
  return (
    <>
      <MyStack {...props} />
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;
