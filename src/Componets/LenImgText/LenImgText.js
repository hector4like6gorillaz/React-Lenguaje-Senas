import React, { useEffect, useState } from 'react';
import { Alphabeth } from '../LenSenas/letters';
import {
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
        <>
            {text.map((item, index) => {
                return (
                    <DivImg key={`${index}+${item}`} hei={props.zoom ? props.hei * .4 : props.hei *.9}> <IMG hei={props.hei} alt="" src={Alphabeth[`${item === "ñ" ? "nn" : item === " " ? "sp" : item.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`]} /></DivImg>
                )
            })}
        </>
    )
}
