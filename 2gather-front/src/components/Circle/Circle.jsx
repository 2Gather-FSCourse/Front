import React from 'react';
import {CircleContainer} from './Circle.style';

const Circle = ({color, width, height, opacity, top, right, bottom, left}) => {
    return (
        <CircleContainer color={color} height={height} width={width} opacity={opacity} top={top} right={right} bottom={bottom} left={left} />
    );
}
export default Circle;

