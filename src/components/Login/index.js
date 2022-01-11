import firebase, { auth } from '../../fireBase/config';
import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { db } from '../../fireBase/config';
import { addDoc } from '../../fireBase/service';
// import { addDoc, collection } from "firebase/firestore";

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
function Login() {
    
    const handleLogin = async (provider) => {
        const {additionalUserInfo, user} = await auth.signInWithPopup(provider)
        
        if(additionalUserInfo?.isNewUser){
            // const docRef = await addDoc(collection(db, "users"), {
            //     displayName: user.displayName,
            //     email: user.email,
            //     photoURL: user.photoURL,
            //     uid: user.displayName,
            //     providerId: additionalUserInfo.providerId
            // });
            // console.log("Document written with ID: ", docRef.id);
            addDoc('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
            });
        }
    }
    
    return (
        <div>
            <Row justify='center' style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>
                        Fun Chat
                    </Title>
                    <Button style={{ width: '100%', marginBottom: 5}}
                        onClick={() => handleLogin(googleProvider)}
                    >
                        Login with Google
                    </Button>
                    <Button style={{ width: '100%'}}
                        onClick={() => handleLogin(fbProvider)}
                    >
                        Login with Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}


export default Login;
