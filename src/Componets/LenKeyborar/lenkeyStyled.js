import styled from "styled-components";

export const DivKeyboard = styled.div`
width:100%;


`
export const ImgSmallLetters = styled.img`
height:90%;

border-radius:20px;

`

export const ButtonIMG = styled.button`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width: ${props => props.width ? props.width : props.area.x / 10 + "px"};
    height: ${props => props.heigth ? props.heigth : props.area.y / 4 + "px"};
    opacity: ${props => props.erase};   
    cursor: pointer;   
    border-radius:20px;
    outline: none;
    &:hover{
      background:#4796FA;
    }
    &:focus {
      border-color:red;
      background:red;
    }
`

export const DivFirstLine = styled.div`

display:flex;
width:100%;
justify-content:space-around;
`

export const DivSecondLine = styled.div`

display:flex;
width:100%;
justify-content:space-around;
`

export const DivThirtLine = styled.div`

display:flex;
width:100%;
justify-content:space-around;
`
export const DivSpaceErase = styled.div`
display:flex;
width:100%;
justify-content:space-around;
`


