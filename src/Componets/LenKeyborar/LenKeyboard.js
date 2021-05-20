import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import { Alphabeth } from '../LenSenas/letters';
import {
    DivKeyboard,
    ImgSmallLetters,
    DivFirstLine,
    DivSecondLine,
    DivThirtLine,
    ButtonIMG,
    DivSpaceErase,
} from "./lenkeyStyled";
export const LenKeyboard = (props) => {
    const text = (letter) => props.func(props.val + letter);
    const erase = () => props.func(props.val.substring(0, props.val.length - 1)); //word.slice(1);
    const areaKeyboard = props.area;
    //const areaKeyboard = {x: "12", y:"12"}
    //width={"10%"} heigth={"10%"}
    return (
        <DivKeyboard>
            <DivFirstLine>
                <ButtonIMG width={"20%"} area={areaKeyboard} onClick={() => text("q")}> <ImgSmallLetters alt="" src={Alphabeth.q} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("w")}> <ImgSmallLetters alt="" src={Alphabeth.w} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("e")}> <ImgSmallLetters alt="" src={Alphabeth.e} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("r")}> <ImgSmallLetters alt="" src={Alphabeth.r} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("t")}> <ImgSmallLetters alt="" src={Alphabeth.t} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("y")}> <ImgSmallLetters alt="" src={Alphabeth.y} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("u")}> <ImgSmallLetters alt="" src={Alphabeth.u} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("i")}> <ImgSmallLetters alt="" src={Alphabeth.i} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("o")}> <ImgSmallLetters alt="" src={Alphabeth.o} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("p")}> <ImgSmallLetters alt="" src={Alphabeth.p} /></ButtonIMG>
            </DivFirstLine>
            <DivSecondLine>
                <ButtonIMG area={areaKeyboard} onClick={() => text("a")}> <ImgSmallLetters alt="" src={"https://ih1.redbubble.net/image.1037471287.2031/flat,750x1000,075,f.jpg"} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("s")}> <ImgSmallLetters alt="" src={Alphabeth.s} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("d")}> <ImgSmallLetters alt="" src={Alphabeth.d} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("f")}> <ImgSmallLetters alt="" src={Alphabeth.f} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("g")}> <ImgSmallLetters alt="" src={Alphabeth.g} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("h")}> <ImgSmallLetters alt="" src={Alphabeth.h} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("j")}> <ImgSmallLetters alt="" src={Alphabeth.j} /></ButtonIMG>
                <ButtonIMG width={"20%"} area={areaKeyboard} onClick={() => text("k")}> <ImgSmallLetters alt="" src={Alphabeth.k} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("l")}> <ImgSmallLetters alt="" src={Alphabeth.l} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("ñ")}> <ImgSmallLetters alt="" src={Alphabeth.nn} /></ButtonIMG>
            </DivSecondLine>
            <DivThirtLine>
                <ButtonIMG area={areaKeyboard} onClick={() => text("z")}> <ImgSmallLetters alt="" src={Alphabeth.z} /></ButtonIMG>
                <ButtonIMG width={"20%"} area={areaKeyboard} onClick={() => text("x")}> <ImgSmallLetters alt="" src={Alphabeth.x} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("c")}> <ImgSmallLetters alt="" src={Alphabeth.c} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("v")}> <ImgSmallLetters alt="" src={Alphabeth.v} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("b")}> <ImgSmallLetters alt="" src={Alphabeth.b} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("n")}> <ImgSmallLetters alt="" src={Alphabeth.n} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} onClick={() => text("m")}> <ImgSmallLetters alt="" src={Alphabeth.m} /></ButtonIMG>
                <ButtonIMG area={areaKeyboard} width={"20%"} erase={".5"} onClick={erase}><FontAwesomeIcon size="2x" icon={faBackspace} /></ButtonIMG>
            </DivThirtLine>
            <DivSpaceErase>
                <ButtonIMG area={areaKeyboard} width={"50%"} heigth={areaKeyboard.y / 4 + "px"} onClick={() => text(" ")} >SPACE</ButtonIMG>
            </DivSpaceErase>
        </DivKeyboard>
    )
}
