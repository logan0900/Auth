import React from 'react';
import 'react-native-gesture-handler';
import MyStack from './src/navigations/stack';

const App = props => {
  return (
    <>
      <MyStack {...props} />
    </>
  );
};

export default App;
