import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { initializeApp } from 'firebase/app';
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

initializeApp(firebaseConfig);


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
