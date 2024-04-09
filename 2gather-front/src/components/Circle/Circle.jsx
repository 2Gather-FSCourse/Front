import React from 'react';
import {CircleContainer} from './Circle.styled.js';

const Circle = ({color, width, height, opacity, top, right, bottom, left, name}) => {
    return (
        <CircleContainer color={color} height={height} width={width} opacity={opacity} top={top} right={right} bottom={bottom} left={left} />
    );
}
export default Circle;

