import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { selectPhotoButtonStyles } from './styles/selectPhotoButtonStyles'
const SelectPhotoButton = ({ photos }) => {

    const listData = [
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
        {
            'img': 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000'
        },
    ]

    return (
        <View>
            {
                listData[0] ? (
                    <View style={selectPhotoButtonStyles.selectPhotoButton}>
                        <FlatList
                            data={listData}
                            renderItem={({ item, index }) => {
                                if (listData.length > 4 && index == 3) {
                                    return (
                                        <View>
                                            <Image style={selectPhotoButtonStyles.img} source={{ uri: item.img }} />
                                            <View style={selectPhotoButtonStyles.otherImgCount} >

                                            </View>
                                            <View style={selectPhotoButtonStyles.otherImgCountText} >
                                                <Text style={selectPhotoButtonStyles.numText}>
                                                    +{listData.length - 4}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                                }
                                else if (index < 4) {
                                    return (
                                        <Image style={selectPhotoButtonStyles.img} source={{ uri: item.img }} />
                                    )
                                }

                            }}
                            numColumns={2}

                        />
                    </View>

                ) : (
                    <TouchableOpacity style={selectPhotoButtonStyles.selectPhotoButton}>
                        <Text style={{ color: 'white' }}>Select Photos</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default SelectPhotoButton