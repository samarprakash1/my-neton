import React from 'react';
import {Container, Grid, Title, Text, Break, Item} from './styles/content'

export default function Content({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Content.Grid=function ContentGrid({children, ...restProps}){
    return <Grid {...restProps}>{children}</Grid>;
}
Content.Item=function ContentItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>;
}

Content.Title=function ContentTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}
Content.Text=function ContentText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
}
Content.Break=function ContentBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>;
}