import React from 'react';
import {Container, Grid, Title, Text, Break, Item} from './styles/prime'

export default function Prime({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Prime.Grid=function PrimeGrid({children, ...restProps}){
    return <Grid {...restProps}>{children}</Grid>;
}
Prime.Item=function PrimeItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>;
}

Prime.Title=function PrimeTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}
Prime.Text=function PrimeText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
}
Prime.Break=function PrimeBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>;
}