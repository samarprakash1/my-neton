import React from 'react';
import {Container, Input, Button, Text, Break} from './styles/opt-form'
// import { Container } from '../jumbotron/styles/jumbotron';
export default function OptForm({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input=function OptFormInput({...restProps}) {
    return <Input {...restProps} />
};
OptForm.Button=function OptFormButton({children, ...restProps}){
    return (

     <Button {...restProps} >
     {children} <img src="/image/arrow.png" alt="hi"/>
     </Button>
    )
};

OptForm.Text=function OptFormText({children, ...restProps}){
    return <Text{...restProps}>{children}</Text>
};

OptForm.Break=function OptFormBreak({...restProps}){
    return <Break{...restProps} />
};
