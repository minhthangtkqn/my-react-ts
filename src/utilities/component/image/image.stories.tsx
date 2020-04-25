import React from 'react';
import MyImage from './index';

export default {
    title: 'Image',
    component: MyImage,
};

const imgUrl = 'https://cdn.vox-cdn.com/thumbor/WEfQUw-9v5ti4MQ_fi84t7Vd6OM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18980526/TuSimple_Self_Drving_Truck_4_copy.jpg';

export const ToStorybook = () => <MyImage src={imgUrl}/>;

ToStorybook.story = {
    name: '1 - My Image',
};
