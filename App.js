import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import TugasModul1 from './src/TugasModul1';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require('./assets/fonts/Inter-Variable.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Variable.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Variable.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Variable.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Variable.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-Variable.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" translucent />
      <TugasModul1 />
    </View>
  );
}
