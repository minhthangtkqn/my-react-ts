import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import noImgUrl from 'asset/images/s-placeholder.png';

type Props = {
    src: string
};

const MyImage: React.FC<Props> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>('');

    useEffect(() => {
        var downloadingImage = new Image();

        downloadingImage.onload = function () {
            setIsLoading(false);
            setImageSrc(props.src);
        };

        downloadingImage.onerror = function () {
            setIsLoading(false);
            setImageSrc(noImgUrl);
        };

        setIsLoading(true);
        downloadingImage.src = props.src;

        return () => {
            downloadingImage.onload = function () { };
            downloadingImage.onerror = function () { };
        };
    }, []);

    const render = () => {
        return (
            <img alt="" src={imageSrc} width="300" height="300" style={{ background: '#CCC' }} />
        );
    };

    return (
        <div style={{ width: 300, height: 300 }}>
            <Spin spinning={isLoading}>
                {render()}
            </Spin>
        </div>
    );
}

export default MyImage;
