import {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import {Card, FormControl, Button, TextField,Container} from '@material-ui/core';
import MainContainer from '../UI/MainContainer';

import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatMessage from './ChatMessage';

if (firebase.apps.length === 0){
    firebase.initializeApp({
    apiKey: "AIzaSyDjc8SuA3Xzg6odRfilRdz432DXq9S2y00",
    authDomain: "messengerapp-5f86d.firebaseapp.com",
    projectId: "messengerapp-5f86d",
    storageBucket: "messengerapp-5f86d.appspot.com",
    messagingSenderId: "441378573822",
    appId: "1:441378573822:web:4b2fb1121d1828f84d04af",
    measurementId: "G-RMD89CRRWN"
    })
}

const auth = firebase.auth();
const firestore = firebase.firestore();


const Messenger = () => {
    
    const [user] = useAuthState(auth);

    return (
        <MainContainer>
            <Card style={{width: '35rem'}}>
                <SignOut auth={auth}/>
                {user ? <ChatRoom /> : <SignIn auth={auth} />}
            </Card>
        </MainContainer>
    )
}


const ChatRoom = () => {

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;
        
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        console.log(formValue)
    }

    console.log(messages)
    return (
        <Container >
            {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
                <Button type="submit" disabled={!formValue}>Submit</Button>
            </form>
        </Container>
    )
}


export default Messenger;