import React, { useEffect, useState } from 'react';
import { LenImgText } from '../LenImgText/LenImgText';
import { LenKeyboard } from '../LenKeyborar/LenKeyboard';
import {
    DivKeyboard,
    TextIn,
    DivIn,
    DivText,
    DivCent,
    HH,
} from './lensenasStyled';
export const LenSenas = () => {
    const [text, setText] = useState("");
    const [position, setPosition] = useState(0);
    const [loading, setLoading] = useState(false);
    var x = window.screen.width;
    var y = window.screen.height;
    var SizeKeyboardX = x * .9;
    var SizeKeyboardY = y * .3;
    var areaKeyboard = { x: SizeKeyboardX, y: SizeKeyboardY };

    const ajustarTamano = () => {
        var panelIzquierda = document.getElementById("keyboard");
        setPosition(panelIzquierda.clientHeight);
        //console.log(y);
    };
    useEffect(() => {
        setLoading(false);
        document.title = "Señas Keyboard"
        ajustarTamano();
        setLoading(true);
    }, []);
    return (
        <DivCent>
            <HH>Traductor de señas bidireccional</HH>
            <DivIn>
                <TextIn
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                    placeholder="escribe texto"
                    value={text}
                />
            </DivIn>
            <DivText>
                <p>{text}</p>
                <LenImgText sentence={text} />
            </DivText>
            <DivKeyboard id="keyboard" area={areaKeyboard} position={y - position - y * .12} >
                {loading && <LenKeyboard area={areaKeyboard} func={setText} val={text} />}
            </DivKeyboard>
        </DivCent>
    )
}

