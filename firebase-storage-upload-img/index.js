import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

export const uploadImgToFirebase = async (data) => {
    const storage = getStorage();
    return new Promise(async (resolve, rej) => {
        if (data.selected == undefined) {
            const storageRef = ref(storage, `images/${data.assetId}.jpg`);
            let img = await fetch(data.uri)
            const bytes = await img.blob()
            await uploadBytes(storageRef, bytes).then(async (snapshot) => {
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

} 