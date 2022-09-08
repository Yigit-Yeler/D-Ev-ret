import { setDoc, getDoc, doc, getFirestore } from 'firebase/firestore'


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
            console.log('Inserted Data')
        })
        .catch((e) => {
            console.log('Erroorr', e)
        })
}

export const getDataFirestore = (coll, docReference) => {
    const db = getFirestore()
    return new Promise((resolve, rej) => {
        getDoc(doc(db, coll, docReference))
            .then((res) => {
                resolve(res.data())
            })
            .catch((e) => {
                rej(e)
            })
    })

}