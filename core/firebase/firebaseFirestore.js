import { setDoc, getDoc, doc, getFirestore, collection, collectionGroup, getDocs } from 'firebase/firestore'


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

    return new Promise(async (resolve, rej) => {
        if (docReference == null) {
            getDocs(collection(db, coll))
                .then((elements) => {
                    let datas = []
                    elements.forEach((item) => {
                        datas.push(item.data())
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