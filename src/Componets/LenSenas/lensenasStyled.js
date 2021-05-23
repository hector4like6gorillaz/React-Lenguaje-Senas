import styled from "styled-components";

export const DivCent = styled.div`
width: 100%;
//height:${props => props.height}px ;
display:flex;
flex-direction:column;
align-items:center;
//position:relative;
//background-image: url("https://steamuserimages-a.akamaihd.net/ugc/781856840818154146/32397539BF3BEF9A251C01A7EF455A09FBEBA3E4/");
`

export const DivKeyboard = styled.div`

//background-image: url("https://steamuserimages-a.akamaihd.net/ugc/781856840818154146/32397539BF3BEF9A251C01A7EF455A09FBEBA3E4/");
width: ${props => props.area.x}px;
height: ${props => props.area.y}px;
transition: .5s;
display:flex;
flex-direction:column;
//position:absolute;

overflow: ${props => props.over ? "hidden":"visible"};
`

export const DivIn = styled.div`
width:100%;

display:flex;
justify-content:space-around;
`
export const DivInputX = styled.div`

width: 90%;
display:flex;
align-items: center;
justify-content: space-around;
border-style: solid;
border-radius: 20px;
`
export const TextIn = styled.textarea`
width:100%;
height:100%;
background: transparent;
min-height: 100px;
font-size:25px;
resize: none;
border-style:none;
outline: none;
margin-left: 20px;
`
export const DivText = styled.div`
border-style: solid;
width: 90% ;
height:30%;
overflow-x:scroll;
margin-top: 1%;
//border-left-style:solid;
border-right-style:solid;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;

`
export const HH = styled.h3`

`



export const ButtonErase = styled.button`
border-style:none;
background: transparent;
border-radius: 50%;
`

export const HideKeyboard = styled.button`
position:absolute;
top:0;
left:0;
`