import { Button } from 'antd';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import style from './index.module.scss';

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `;
const MAX_CONTAINER_HEIGHT = 300;


export default function Quote() {
    const [randomString, setRandomString] = useState(text);
    const [expandLongQuote, setExpandLongQuote] = useState<boolean>(false);
    const [count, setCount] = useState(1);
    const componentRef = React.createRef<any>();

    // change text
    useEffect(() => {
        const random = Math.floor((Math.random() * 6) + 1);

        let string = '';
        for (let index = 0; index < random; index++) {
            string += text;
        }
        setRandomString(string);
        setExpandLongQuote(false);
    }, [count]);

    // calculate & expand
    useEffect(() => {
        window.performance.mark("use_effect_handler_start");
        const rect = componentRef?.current?.getBoundingClientRect();
        console.log('rect: ', rect);
        console.log('style: ', style['fixed-height']);
        if (rect.height > MAX_CONTAINER_HEIGHT && !expandLongQuote) {
            console.log('add');
            componentRef.current.classList.add(style['fixed-height']);
        } else {
            console.log('remove');
            componentRef.current.classList.remove(style['fixed-height']);
        }
        window.performance.measure(
            "use_effect_handler_end",
            "use_effect_handler_start"
        );
        console.log('+++++++++++++++++++++++++++++++++');
    }, [componentRef, expandLongQuote]);

    const _handleChangeText = () => {
        setCount(count + 1);
    };

    const _handleExpand = () => {
        setExpandLongQuote(true);
    };

    return (
        <div>
            <Button type="primary" onClick={_handleChangeText}>Change text</Button>

            <br />

            <div className={style['container']} ref={componentRef}>
                {randomString}
            </div>

            {!expandLongQuote &&
                <Button type="link" onClick={_handleExpand}>Expand</Button>
            }
        </div>
    );
};
