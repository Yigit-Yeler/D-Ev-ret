# How to use firebase-storage-upload-image library

**IMPORTANT!! You must use this library with expo-image-picker for now.**

This library returns array of the uploaded images download url's.

**You can import like this.**


    import { uploadImgToFirebase } from 'firebase-storage-upload-img'


**Example Usage**


    const [selectedImages, setSelectedImages] = useState()

    let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsMultipleSelection: true,
                quality: 0.1
            });

            if (!result.cancelled) {
                setSelectedImages(result)
            }

**Example Usage**


    uploadImgToFirebase(selectedImages) // object or array
                .then((res) => { // res = string array
                    tmpData = { ...tmpData, 'images': res }
                })
                .catch((e)=>console.log(e))



