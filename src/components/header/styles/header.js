import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background=styled.div`
display: flex;
flex-direction: column;
background: #00003f;
${'' /* background: url(${({src}) =>
src ? `../image/${src}.jpg` : '../image/bcd.png'})
top left / cover no-repeat ; */}
`;



export const Container=styled.div`
display: flex;
margin: 0 56px;
height:64px;
padding: 18px 0;
justify-content: space-between;
align-items: center;

a{
    display: flex;
}

@media (max-width: 1000px){
    margin: 0 30px;
}
`;

export const Logo=styled.img`
height: 70px;
width: 120px;
margin-right: 40px;
object-fit: cover;
background:white;
padding:10px;
border-radius:50%;
margin-top:15px;


@media (min-width: 1449px) {
    height: 45px;
    width: 167px
}
`;

export const ButtonLink=styled(ReactRouterLink)`
display:block;
background-color: white;
width: 84px;
height: fit-content;
color: #ff4500;
border: 0;
font-size:15px;
border-radius:3px;
padding: 8px 17px;
cursor: pointer;
text-decoration:none;
box-sizing: border-box;

&:hover{
    background-color: #ff4500;
    color:white;
}
`;


