import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { postStyles } from './styles/postStyles'

const Post = ({ title, desc }) => {
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
        }
    ]


    return (
        <View style={postStyles.main}>
            <View style={postStyles.imgView}>
                <FlatList
                    horizontal
                    data={listData}
                    renderItem={({ item, index }) => {
                        return (
                            <Image style={postStyles.img} source={{ uri: item.img }} />
                        )
                    }}
                />
            </View>
            <View style={postStyles.name}>
                <Text>Name</Text>
            </View>
            <View style={postStyles.titleView}>
                <Text style={postStyles.titleText}>{title ? title : 'Title'}</Text>
                <Text style={postStyles.descText}>Description</Text>
            </View>

            <View style={postStyles.adressView}>
                <View style={postStyles.adress}>
                    <Text >Adress</Text>
                </View>
                <TouchableOpacity style={postStyles.location}>
                    <Text>Location</Text>
                </TouchableOpacity>
            </View>
            <View style={postStyles.featuresView}>
                <View style={postStyles.features}>
                    <View style={postStyles.featureView}>
                        <Text>Eşyalı</Text>
                        <Text>Eşyalı</Text>
                        <Text>Eşyalı</Text>
                    </View>
                    <View>
                        <Text>Price</Text>
                    </View>
                </View>
                <TouchableOpacity style={postStyles.sendMessageView}>
                    <Text>Send Message</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post