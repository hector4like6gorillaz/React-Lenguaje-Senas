import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faKeyboard, faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { LenImgText } from '../LenImgText/LenImgText';
import { LenKeyboard } from '../LenKeyborar/LenKeyboard';
import {
    DivKeyboard,
    TextIn,
    DivIn,
    DivText,
    DivCent,
    HH,
    DivInputX,
    ButtonErase,
    HideKeyboard,
    LetterSize,

} from './lensenasStyled';
export const LenSenas = () => {
    document.title = "Señas Keyboard";
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [areaKeyboard, setareaKeyboard] = useState({ x: "", y: "" });

    const [hide, setHide] = useState(false);
    const [bottomBolean, setBottomBolean] = useState(false);
    const [imgsize, setImgsize] = useState("150");

    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        setLoading(false);
        keyboardsize();
        setLoading(true);
    }, []);
    const keyboardsize = () => {

        var x = window.screen.width;
        var y = window.screen.height;
        const num = (x < y) ? y * .3 : y * .6;
        setareaKeyboard({ x: `${x * .9}`, y: `${num}` });
        (x < y) ? setImgsize(num * 1.2) : setImgsize(num * .55);
    }
    const hideKeyboard = () => {
        (!hide) ? setareaKeyboard({ x: `0`, y: `0` }) : keyboardsize();
        (hide) ? setHide(false) : setHide(true);
        (bottomBolean) ? setBottomBolean(false) : setBottomBolean(true);
    }

    const zoomStyle = () => {
        (zoom) ? setZoom(false) : setZoom(true);
    }
    window.addEventListener("resize", function () {
        keyboardsize();
    });


    return (
        <DivCent >
            <HideKeyboard onClick={hideKeyboard}>
                <FontAwesomeIcon size="1x" icon={faKeyboard} />
            </HideKeyboard>
            <LetterSize onClick={zoomStyle}>
                {zoom ?
                    <FontAwesomeIcon size="1x" icon={faSearchPlus} />
                    :
                    <FontAwesomeIcon size="1x" icon={faSearchMinus} />
                }
            </LetterSize>
            <HH>Traductor de señas bidireccional</HH>
            <DivIn>
                <DivInputX>
                    <TextIn
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                        placeholder="escribe texto"
                        value={text}
                    />
                    <ButtonErase onClick={() => setText("")}>
                        <FontAwesomeIcon size="3x" icon={faTimesCircle} />
                    </ButtonErase>
                </DivInputX>
            </DivIn>
            <DivText heigth={imgsize} zoom={zoom}>
                <LenImgText sentence={text} hei={imgsize} zoom={zoom}/>
            </DivText>
            <DivKeyboard area={areaKeyboard} over={bottomBolean} >
                {loading && <LenKeyboard area={areaKeyboard} func={setText} val={text} />}
            </DivKeyboard>
            <HH>Designed by Hector R. Balan H.</HH>
        </DivCent>
    )
}

