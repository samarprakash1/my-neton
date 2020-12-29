import React from 'react'; 
// import { Header } from '../components';
import {OptForm, Feature} from '../components'
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

import { JumbotronContainer } from '../containers/jumbotron';
import { ContentContainer } from '../containers/content';
import { PrimeContainer } from '../containers/prime';
import { SportContainer } from '../containers/sportsnews';

export default function Home(){
    return (
        <>
        <HeaderContainer>
        <Feature>
            <Feature.Title>
                Welcome To Neton India.
            </Feature.Title>
            <Feature.SubTitle>
                Enjoy Webseries Movies & Serials.
            </Feature.SubTitle>
            {/* <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm> */}
        </Feature>
       
        </HeaderContainer>
        <SportContainer/>
            <ContentContainer/>
            <PrimeContainer/>
            <FooterContainer/>
           
        
        </>
    )
}
