import React from 'react';
import { PageTitleContainer, PageTitleStyle } from '../../components/PageTitle/PageTitle.style';

const PageTitle = ({title}) => {
    return (
        <PageTitleContainer>
            <PageTitleStyle>{title}</PageTitleStyle>
        </PageTitleContainer>
    );
}
export default PageTitle;
