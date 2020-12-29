import React from 'react';
import {Container, Grid, Title, Text, Break, Item} from './styles/sport'

export default function Sport({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Sport.Grid=function SportGrid({children, ...restProps}){
    return <Grid {...restProps}>{children}</Grid>;
}
Sport.Item=function SportItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>;
}

Sport.Title=function SportTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}
Sport.Text=function SportText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
}
Sport.Break=function SportBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>;
}