import React from 'react';
import {CircleContainer} from './Circle.style';

const Circle = ({color, size, opacity}) => {
    return (
        <CircleContainer color={color} size={size} opacity={opacity} />
    );
}
export default Circle;

