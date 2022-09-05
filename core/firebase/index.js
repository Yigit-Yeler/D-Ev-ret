import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { NavigationPathEnum } from '../enum/navigationPathEnum';
import { signIn, signUp } from '../../src/store/slices/authSlice';

export const firebaseSignUp = ({ email, password }) => {
    return new Promise((resolve, rej) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((res) => {
                resolve(res.user)
            })
            .catch((e) => {
                rej(e)
            })
    })
}

export const firebaseSignIn = ({ email, password }) => {
    return new Promise((resolve, rej) => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((res) => {
                resolve(res.user)
            })
            .catch((e) => {
                rej(e)
            })
    })
}