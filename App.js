import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';

import { Provider } from 'react-redux';
import { store } from './src/store';
import './firebase/config';



export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
