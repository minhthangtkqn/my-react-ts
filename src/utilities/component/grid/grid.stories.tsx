import React from 'react';
import Grid from './';

export default {
    title: 'Grid',
    component: Grid,
};

export const ToStorybook = () => <Grid />;

ToStorybook.story = {
    name: '1 - Grid home',
};
