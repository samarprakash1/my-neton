import React, {useState} from 'react';
import { HeaderContainer } from '../containers/header';
import {FooterContainer} from '../containers/footer'
import {Form} from '../components'
export default function Signin(){
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) =>{
        event.preventDefault();
    }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignin} method="POST">
                <Form.Input
                placeholder="Email address"
                value={emailAddress}
                onChange={({target}) => setEmailAddress(target.value)}
                 />

               <Form.Input 
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={({target}) => setPassword(target.value)}
                 />
                 <Form.Submit disabled={isInvalid} type="submit">
                     Sign In
                 </Form.Submit>
                </Form.Base>
                <Form.Text>
                    New to Neton? <Form.Link to="/signup">Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    SignIn with google and SignIn with facebook will be
                    added soon. Keep calm!
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}