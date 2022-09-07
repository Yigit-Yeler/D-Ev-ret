import { setDoc, doc, getFirestore } from 'firebase/firestore'

export const insertDataFirestore = (
    coll,
    docReference,
    data
) => {
    const { name, surname, email } = data
    let insert = {
        'name': name,
        'surname': surname,
        'email': email
    }

    const db = getFirestore()

    setDoc(doc(db, coll, docReference), insert)
        .then(() => {
            console.log('data girdidii')
        })
        .catch((e) => {
            console.log('eeorrooro', e)
        })
}