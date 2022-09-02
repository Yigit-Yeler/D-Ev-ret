import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { NavigationPathEnum } from '../enum/navigationPathEnum';

export const firebaseSignUp = ({ email, password }, navigation) => {
    createUserWithEmailAndPassword(getAuth(), email, password)
        .then((res) => {
            navigation.replace(
                NavigationPathEnum.bottomTab,
                { screen: NavigationPathEnum.home }
            )
        })
        .catch((e) => {
            console.log('Firebase Errorr:: ', e)
        })
}

export const firebaseSignIn = ({ email, password }, navigation) => {
    signInWithEmailAndPassword(getAuth(), email, password)
        .then((res) => {
            navigation.replace(
                NavigationPathEnum.bottomTab,
                { screen: NavigationPathEnum.home }
            )
            console.log(res.user.uid)
        })
        .catch((e) => {
            console.log('Firebase Errorr :: ', e)
        })
}