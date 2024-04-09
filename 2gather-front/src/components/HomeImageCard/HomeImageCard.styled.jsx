import styled from 'styled-components';

export const HomeImageCardStyled = styled.img`
    //min-width: 15vw;
    max-width: 215px;
    height: 314px;
    object-fit: cover;
    border-radius: 1rem;
    margin: 1rem;
    @media (max-width: 768px) {
        display: none;
    }
    `;

export default { HomeImageCardStyled };
