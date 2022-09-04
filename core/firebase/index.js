import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { NavigationPathEnum } from '../enum/navigationPathEnum';
import { signIn, signUp } from '../../src/store/slices/authSlice';

export const firebaseSignUp = ({ email, password }) => {
    return new Promise((res, rej) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((res) => {
                res(res.user)
            })
            .catch((e) => {
                rej(e)
            })
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