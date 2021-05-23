import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faKeyboard } from '@fortawesome/free-solid-svg-icons'
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

} from './lensenasStyled';
export const LenSenas = () => {
    document.title = "Señas Keyboard";
    const [text, setText] = useState("");

    const [loading, setLoading] = useState(false);
    const [areaKeyboard, setareaKeyboard] = useState({ x: "", y: "" });

    const [senasSize, setsenasSize] = useState(150);
    const [hide, setHide] = useState(false);

    const [bottom, setBottom] = useState(100);
    const [bottomBolean, setBottomBolean] = useState(false);

   
    useEffect(() => {
        setLoading(false);
        keyboardsize();
        var panelIzquierda = document.getElementById("senas");
        setsenasSize(panelIzquierda.clientHeight);
        console.log(panelIzquierda.clientHeight);
        setLoading(true);
    }, []);

    const keyboardsize = () => {
        var x = window.screen.width;
        var y = window.screen.height;
        setareaKeyboard({ x: `${x * .9}`, y: `${(x < y) ? y * .3 : y * .6}` });
    }
const hideKeyboard = () =>{
    (!hide)?setareaKeyboard({ x: `0`, y: `0` }):keyboardsize();
    (hide)?setHide(false):setHide(true);
    (bottomBolean)?setBottomBolean(false):setBottomBolean(true);
}

    window.addEventListener("resize", function () {
        keyboardsize();
    });
    return (
        <DivCent height={window.screen.height}>
            <HideKeyboard onClick={hideKeyboard}>
                <FontAwesomeIcon size="1x" icon={faKeyboard} />
            </HideKeyboard>
            <HH>Traductor de señas bidireccional</HH>
            <DivIn>
                <DivInputX>
                    <TextIn
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                        placeholder="escribe texto"
                        value={text}
                        rows="4"
                        cols="35"
                    />
                    <ButtonErase onClick={() => setText("")}>
                        <FontAwesomeIcon size="3x" icon={faTimesCircle} />
                    </ButtonErase>
                </DivInputX>

            </DivIn>
            <DivText id="senas">

                <LenImgText sentence={text} hei={senasSize} />
            </DivText>
            <DivKeyboard area={areaKeyboard} over={bottomBolean} >
                {loading && <LenKeyboard area={areaKeyboard} func={setText} val={text} />}

            </DivKeyboard>
        </DivCent>
    )
}

//position={y - position - y * .12}