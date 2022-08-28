import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DmBox from '../components/DmBox'
import { myDmStyles } from '../styles/myDmStyles'

const MyDm = () => {
    const listData = [
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        },
        {
            'username': 'Yiğit Yeler',
            'lastMassage': 'Merhabalar'
        }
    ]
    return (
        <View style={myDmStyles.main}>
            <FlatList
                data={listData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <DmBox comeFrom={item.username} lastMassage={item.lastMassage} />
                    )
                }}
            />
        </View>
    )
}

export default MyDm