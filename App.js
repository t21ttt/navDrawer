import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './components/MyDrawer';

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;