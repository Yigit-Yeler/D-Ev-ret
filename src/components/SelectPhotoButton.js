import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { selectPhotoButtonStyles } from './styles/selectPhotoButtonStyles'
const SelectPhotoButton = ({ photos, onPress }) => {
    return (
        <View>
            {
                photos ? (
                    <TouchableOpacity
                        onPress={onPress()}
                        style={selectPhotoButtonStyles.selectPhotoButton}>
                        {photos.selected == undefined ? (
                            <Image style={selectPhotoButtonStyles.oneImg} source={{ uri: photos.uri }} />
                        ) : (
                            <FlatList
                                data={photos.selected}
                                renderItem={({ item, index }) => {
                                    if (photos.selected.length > 4 && index == 3) {
                                        return (
                                            <View>
                                                <Image style={selectPhotoButtonStyles.img} source={{ uri: item.uri }} />
                                                <View style={selectPhotoButtonStyles.otherImgCount} >

                                                </View>
                                                <View style={selectPhotoButtonStyles.otherImgCountText} >
                                                    <Text style={selectPhotoButtonStyles.numText}>
                                                        +{photos.selected.length - 4}
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                    else if (index < 4) {
                                        return (
                                            <Image style={selectPhotoButtonStyles.img} source={{ uri: item.uri }} />
                                        )
                                    }

                                }}
                                numColumns={2}

                            />
                        )}

                    </TouchableOpacity>

                ) : (
                    <TouchableOpacity
                        style={selectPhotoButtonStyles.selectPhotoButton}
                        onPress={onPress()}
                    >
                        <Text style={{ color: 'white' }}>Fotoğraf Seçin</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default SelectPhotoButton