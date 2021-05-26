import React, { useEffect, useState } from 'react';
import { Alphabeth, Dicctionary } from '../LenSenas/letters';
import {
    DivImg,
    IMG,
} from "./lenimgtextStyled";
export const LenImgText = (props) => {
    const [words, setwords] = useState([]);
    const Minus = word => word.toLowerCase();
    const AccentMark = word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const SearchWordInDictionary = word => Object.getOwnPropertyNames(Dicctionary).indexOf(word) === -1 ? false : true;
    useEffect(() => {
        var words = AccentMark(Minus(props.sentence)).split(" ");
        var fullArray = [];
        for (var i = 0; i < words.length * 2 - 1; i++) fullArray.push(i % 2 === 0 ? words[i / 2] : " ");
        setwords(fullArray);
    }, [props.sentence]);
    return (
        <>
            {words.map((item, index) => {
                return (
                    SearchWordInDictionary(item) ?
                        <DivImg key={`${index}+Dictionary+${item}`} hei={props.zoom ? props.hei * .4 : props.hei * .9}>
                            <IMG
                                hei={props.hei}
                                alt=""
                                src={Dicctionary[`${item}`]}
                            />
                        </DivImg>
                        :
                        Array.from(item).map((item, index) => {
                            return (
                                <DivImg key={`${item}+Alphabeth*${index}`} hei={props.zoom ? props.hei * .4 : props.hei * .9}>
                                    <IMG
                                        hei={props.hei}
                                        alt=""
                                        src={Alphabeth[`${item === "ñ" ? "nn"
                                            :
                                            item === " " ? "sp"
                                                :
                                                item}`]}
                                    />
                                </DivImg>
                            )
                        })
                )
            })}
        </>
    )
}
