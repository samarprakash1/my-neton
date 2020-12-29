import styled from 'styled-components/macro';

export const Container=styled.div`
display: flex;
flex-direction: column;
margin-left:28px;
max-width:1000px;
flex-direction:column;

@media(max-width: 1000px){
    padding: 70px 30px;
}

`;

export const Grid=styled.div`
display: grid;
grid-template-columns: repeat(6, auto);
  grid-gap: 16px;

  @media(max-width: 1000px){
      grid-template-columns: repeat(1,auto);
  }
 


`;
export const Item=styled.div`



}
`;








export const Title=styled.p`
color: white;
margin-bottom: 40px;
font-size: 25px;

`;
export const Text=styled.p`
color: #757575;
margin-bottom: 40px;
font-size: 13px;
`;

export const Break=styled.p`
flex-basis: 100%;
height: 0;
`;

