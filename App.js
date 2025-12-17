import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import TextToImageScreen from './components/TextToImageScreen';
import SummarizeScreen from './components/SummarizeScreen';

const Stack = createStackNavigator();

export default function App() {
  try {
    console.log('App started');
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'AI Fusion' }} />
          <Stack.Screen name="ImageGen" component={TextToImageScreen} options={{ title: 'Text-to-Image' }} />
          <Stack.Screen name="Summarize" component={SummarizeScreen} options={{ title: 'Text Summarizer' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (error) {
    console.error('Error in App:', error);
    return null; // or a fallback UI
  }
}
