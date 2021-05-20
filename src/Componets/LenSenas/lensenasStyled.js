import styled from "styled-components";

export const DivCent = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
//background-image: url("https://steamuserimages-a.akamaihd.net/ugc/781856840818154146/32397539BF3BEF9A251C01A7EF455A09FBEBA3E4/");
`

export const DivKeyboard = styled.div`

//background-image: url("https://steamuserimages-a.akamaihd.net/ugc/781856840818154146/32397539BF3BEF9A251C01A7EF455A09FBEBA3E4/");
width: ${props => props.area.x}px;
height: ${props => props.area.y}px;
display:flex;
flex-direction:column;
position:absolute;
top:${props => props.position}px;

`

export const DivIn = styled.div`
width:100%;
display:flex;
justify-content:space-around;
`

export const TextIn = styled.input`
width:80%;
height:50px;
font-size:25px;

`
export const DivText = styled.div`
width: 90% ;
height:10%;
overflow-x:scroll;
margin-top: 10%;
//border-left-style:solid;
border-right-style:solid;
`
export const HH = styled.h3`

`