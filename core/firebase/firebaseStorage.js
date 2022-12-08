import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

export const uploadImg = async (data) => {
    const storage = getStorage();
    return new Promise(async (resolve, rej) => {
        if (data.selected == undefined) {
            const storageRef = ref(storage, `images/${data.assetId}.jpg`);
            let img = await fetch(data.uri)
            const bytes = await img.blob()
            await uploadBytes(storageRef, bytes).then(async (snapshot) => {
                console.log('YÜKLENDİ');
                await getDownloadURL(storageRef).then((res) => {
                    resolve([res])
                })
            });
        }
        else {
            let urls = []
            await data.selected.map(async (item, index) => {
                let url = ''
                const storageRef = ref(storage, `images/${item.assetId}.jpg`);
                let img = await fetch(item.uri)
                const bytes = await img.blob()
                await uploadBytes(storageRef, bytes).then(async (snapshot) => {
                    console.log('YÜKLENDİ');
                    await getDownloadURL(storageRef).then((res) => {
                        url = res
                    })
                });
                urls.push(url)
                if (data.selected.length == urls.length) {
                    console.log(urls)
                    resolve(urls)
                }
            });
        }



    })

    const storageRef = ref(storage, 'myImg.jpg');



    uploadBytes(storageRef, bytes).then((snapshot) => {
        console.log('asdas')
        getDownloadURL(storageRef).then((res) => {
            console.log(res)
        })
    });



    // const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    // if (typeof data == 'object') {

    // }

} 