import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

export const uploadImg = async (data) => {
    const storage = getStorage();
    const storageRef = ref(storage, 'images/img.jpg');
    console.log(data)

    // uploadBytes(storageRef, data).then((snapshot) => {
    //     console.log(snapshot);
    //     console.log(storageRef.storage)
    // });
    await uploadString(storageRef, data.uri).then((snapshot) => {
        // console.log(snapshot);
        // console.log(getDownloadURL(storageRef))
    });

    getDownloadURL(storageRef).then((res) => {
        console.log(res)
    })
    // const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    // if (typeof data == 'object') {

    // }

} 