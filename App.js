import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

const firebaseConfig = {
  apiKey: "AIzaSyBZbQ_fABtuWlEc-PnmHghRuJvnoZxLeyk",
  authDomain: "house-transferer.firebaseapp.com",
  projectId: "house-transferer",
  storageBucket: "house-transferer.appspot.com",
  messagingSenderId: "922490365076",
  appId: "1:922490365076:web:4f1ce178cc750f1a9f0081"
};
// console.log(firebase)

const app = initializeApp(firebaseConfig);
LogBox.ignoreLogs(["Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
