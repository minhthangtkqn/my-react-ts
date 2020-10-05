import React from 'react';
import Quote from './';

export default {
    title: 'Quote',
    component: Quote,
};

export const ToStorybook = () => <Quote />;

ToStorybook.story = {
    name: '1 - Original',
};
