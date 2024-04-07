import React from 'react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.styled.js';

const PageTitle = ({title}) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{title}</PageTitleStyled>
        </PageTitleContainer>
    );
}
export default PageTitle;
