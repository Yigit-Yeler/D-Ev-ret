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
import { createRoom, deleteRoom, getMessagesFirestore, insertMessageFirestore } from '../../core/firebase/firebaseFirestore'
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
const Chat = ({ route, navigation }) => {
    const { postOwnerId, roomId } = route.params
    const userAuth = useSelector(state => state.auth.userAuth)
    const [chat, setChat] = useState([])
    const [message, setMessage] = useState({
        'message': '',
        'uid': userAuth.uid
    })
    const array = [
        {
            'name': 'asdasdqwf İLKKKLŞASFLŞKWLŞFKLASKŞFLKQWOFKŞALSKFŞLKWŞAF',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'sa',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf SONN',
            'id': 0
        },
    ]

    useEffect(() => {
        const db = getFirestore()

        const q = query(collection(db, "rooms", roomId, 'messages'), orderBy('date'));
        onSnapshot(q, async (querySnapshot) => {
            const messages = [];
            await querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            console.log(messages)
            setChat(messages)
        }, [])

    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = function () {
                if (chat == []) {
                    deleteRoom('rooms', roomId)
                        .then((res) => {
                            console.log(res)
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
        insertMessageFirestore('rooms', roomId, 'messages', tmpMessage)
            .then(() => {
                console.log('mesaj gönderildi')
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
                />
            </View>
            <View style={chatStyles.messageInput}>
                <TextInput
                    onChangeText={(text) => textHandle(text)}
                    style={chatStyles.textInput}
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