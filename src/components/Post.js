import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { postStyles } from './styles/postStyles'

const Post = () => {
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
            <View style={postStyles.name}>
                <Text>Name</Text>
            </View>
            <View style={postStyles.titleView}>
                <Text style={postStyles.titleText}>Title</Text>
                <Text style={postStyles.descText}>Description</Text>
            </View>
            <View style={postStyles.imgView}>

                <FlatList
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={listData}
                    renderItem={({ item, index }) => {
                        <Text>adasdasdasd</Text>
                    }}
                />
            </View>
        </View>
    )
}

export default Post