import React, { useEffect, useState } from 'react';
import { Alphabeth } from '../LenSenas/letters';
import {
    DivText,
    DivImg,
    IMG,
} from "./lenimgtextStyled";
export const LenImgText = (props) => {
    const [text, setText] = useState([]);
    const minus = (word) => word.toLowerCase();
    useEffect(() => {
        var cadena = minus(props.sentence).split("");
        setText(cadena);
    }, [props.sentence]);
    return (
        <DivText>
            {text.map((item, index) => {
                return (
                    <DivImg key={`${index}+${item}`} hei={props.hei}> <IMG alt="" src={Alphabeth[`${item === "ñ" ? "nn" : item === " " ? "sp" : item.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`]} /></DivImg>
                )
            })}
        </DivText>
    )
}
