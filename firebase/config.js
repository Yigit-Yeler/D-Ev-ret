import { initializeApp } from 'firebase/app';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyBZbQ_fABtuWlEc-PnmHghRuJvnoZxLeyk",
    authDomain: "house-transferer.firebaseapp.com",
    projectId: "house-transferer",
    storageBucket: "house-transferer.appspot.com",
    messagingSenderId: "922490365076",
    appId: "1:922490365076:web:4f1ce178cc750f1a9f0081"
};
// console.log(firebase)
export const app = initializeApp(firebaseConfig);
export const initAuth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
// export const fireAuth = getAuth()

// import 'dotenv/config';
// export default {
//   expo: {
//     name: "house-transferer",
//     slug: "house-transferer",
//     version: '1.0.0',
//     orientation: 'portrait',
//     icon: './assets/icon.png',
//     userInterfaceStyle: "light",
//     splash: {
//       image: './assets/splash.png',
//       resizeMode: 'contain',
//       backgroundColor: '#ffffff'
//     },
//     updates: {
//       fallbackToCacheTimeout: 0
//     },
//     assetBundlePatterns: ['**/*'],
//     ios: {
//       supportsTablet: true
//     },
//     android: {
//       adaptiveIcon: {
//         foregroundImage: './assets/adaptive-icon.png',
//         backgroundColor: '#FFFFFF'
//       }
//     },
//     web: {
//       favicon: './assets/favicon.png'
//     },
//     extra: {
//       apiKey: process.env.API_KEY,
//       authDomain: process.env.AUTH_DOMAIN,
//       projectId: process.env.PROJECT_ID,
//       storageBucket: process.env.STORAGE_BUCKET,
//       messagingSenderId: process.env.MESSAGING_SENDER_ID,
//       appId: process.env.APP_ID
//     }
//   }
// };