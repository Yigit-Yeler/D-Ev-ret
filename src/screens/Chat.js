import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { chatStyles } from '../styles/chatStyles'
import { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Message from '../components/Message'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { orderBy, Timestamp } from 'firebase/firestore';
import { createRoom, deleteDocFirestore, getMessagesFirestore, insertMessageFirestore, setChatUsers, setLastMessage } from '../../core/firebase/firebaseFirestore'
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { useRef } from 'react';
const Chat = ({ route, navigation }) => {
    const flatList = useRef(null);
    const { postOwnerId, roomId, postOwnerName } = route.params
    const userAuth = useSelector(state => state.auth.userAuth)
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const [chat, setChat] = useState([])
    const [message, setMessage] = useState({
        'message': '',
        'uid': userAuth.uid
    })

    useEffect(() => {
        const db = getFirestore()

        const q = query(collection(db, "rooms", roomId, 'messages'), orderBy('date'));
        onSnapshot(q, async (querySnapshot) => {
            const messages = [];
            await querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            setChat(messages)
        }, [])

    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = function () {
                if (chat == []) {
                    deleteDocFirestore('rooms', roomId)
                        .then((res) => {
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }
            };

            return () => unsubscribe();
        }, [])
    );

    const textHandle = (value) => {
        let updatedValue = { 'message': value };
        setMessage(message => ({
            ...message,
            ...updatedValue
        }));
    }

    const sendMessage = () => {

        let tmpMessage = { ...message, 'date': Timestamp.fromMillis(Date.now()) }
        setMessage({ ...message, 'message': '' })
        insertMessageFirestore('rooms', roomId, 'messages', tmpMessage)
            .then(() => {
                let lastMessageData = {
                    roomId: roomId,
                    users: [{
                        'uid': userAuth.uid,
                        'name': userInfo.name
                    },
                    {
                        'uid': postOwnerId,
                        'name': postOwnerName
                    }],
                    lastMessage: { ...tmpMessage }
                }
                setChatUsers('users', userAuth.uid, 'chatUsers', roomId, lastMessageData)
                    .then(() => {
                    })

                lastMessageData = {
                    roomId: roomId,
                    users: [{
                        'uid': postOwnerId,
                        'name': postOwnerName
                    },
                    {
                        'uid': userAuth.uid,
                        'name': userInfo.name
                    }],
                    lastMessage: { ...tmpMessage }
                }
                setChatUsers('users', postOwnerId, 'chatUsers', roomId, lastMessageData)
                    .then(() => {

                    })
            })

    }

    return (
        <View style={chatStyles.main}>
            <View style={chatStyles.flatView}>
                <FlatList
                    data={chat}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Message
                                text={item.message}
                                userId={userAuth.uid}
                                messageUserId={item.uid}
                            />
                        )
                    }}
                    ref={flatList}
                    onContentSizeChange={() => flatList.current.scrollToEnd()}
                />
            </View>
            <View style={chatStyles.messageInput}>
                <TextInput
                    placeholder='Mesajı Griniz'
                    value={message.message}
                    onChangeText={(text) => textHandle(text)}
                    style={chatStyles.textInput}
                    maxLength={35}
                />
                <TouchableOpacity
                    onPress={sendMessage}
                >
                    <Ionicons name="paper-plane" size={32} color="purple" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat