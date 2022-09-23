import { setDoc, addDoc, getDoc, doc, getFirestore, collection, collectionGroup, getDocs } from 'firebase/firestore'


export const insertDataFirestore = (
    coll,
    data,
    docReference
) => {
    const db = getFirestore()

    if (docReference == null) {
        return new Promise((resolve, rej) => {
            addDoc(collection(db, coll), data)
                .then(() => {
                    console.log('Inserted Data')
                    resolve('Inserted Data')
                })
                .catch((e) => {
                    console.log('Erroorr', e)
                    rej(e)
                })
        })

    }
    else {
        return new Promise((resolve, rej) => {
            setDoc(doc(db, coll, docReference), data)
                .then(() => {
                    console.log('Inserted Data')
                    resolve('Inserted Data')
                })
                .catch((e) => {
                    console.log('Erroorr', e)
                    rej(e)
                })
        })
    }

}

export const getDataFirestore = (coll, docReference) => {
    const db = getFirestore()

    return new Promise(async (resolve, rej) => {
        if (docReference == null) {
            getDocs(collection(db, coll))
                .then((elements) => {
                    let datas = []
                    elements.forEach((item) => {
                        datas.push(item.data())
                        // console.log(item.id)
                    })
                    resolve(datas)

                })
                .catch((e) => {
                    rej(e)
                })


            // getDoc(postRef) 
            //     .then((res) => {
            //         resolve(res.data())
            //         console.log(res)
            //     })
            //     .catch((e) => {
            //         rej(e)
            //     })
        }
        else {
            getDoc(doc(db, coll, docReference))
                .then((res) => {
                    resolve(res.data())
                })
                .catch((e) => {
                    rej(e)
                })
        }

    })

}

export const insertPostFirestore = (
    coll,
    docReference,
    docReference2,
    data,
) => {
    const db = getFirestore()
    return new Promise((resolve, rej) => {

        addDoc(collection(db, coll, docReference, docReference2), data)
            .then(() => {
                addDoc(collection(db, docReference2), data)
                    .then(() => {
                        console.log('Inserted Data Fulll')
                        resolve('Inserted Data ')
                    })
                    .catch((e) => {
                        console.log('Erroorr', e)
                        rej(e)
                    })
            })
            .catch((e) => {
                console.log('Erroorr', e)
                rej(e)
            })
    })
}

export const insertUserRoomFirestore = (
    coll,
    docReference,
    coll2,
    docReference2,
    data,
) => {
    const db = getFirestore()

    setDoc(collection(db, coll, docReference, coll2, docReference2), data)
        .then(() => {
            console.log('kullanıcııı')
            // resolve('Inserted Data')
        })
        .catch((e) => {
            console.log('Erroorr', e)
            // rej(e)
        })
}

export const createRoom = (
    coll,
    data,
) => {
    const db = getFirestore()

    return new Promise((resolve, rej) => {
        addDoc(collection(db, coll), {})
            .then((res) => {
                console.log(typeof res.id)
                setDoc(doc(db, coll, res.id, 'users'), data)
                    .then((res2) => {
                        resolve('Inserted Data')
                    })
                    .catch((err) => {
                        rej(err)
                    })
            })
            .catch((e) => {
                console.log('Erroorr', e)
                rej(e)
            })
    })



}