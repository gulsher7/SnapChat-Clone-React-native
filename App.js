import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Home from './src/Home/Home'
import Routes from './src/Navigations/Routes';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
};

export default App;
