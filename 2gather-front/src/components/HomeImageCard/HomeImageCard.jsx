import React from 'react';
import {HomeImageCardStyled} from './HomeImageCard.styled';
export  const HomeImageCard = ({image}) => {

    return (
        <div>
            <HomeImageCardStyled src={image} alt="image"  />
        </div>
    );
}