import styled from 'styled-components';

export const HomeWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    height: 100%;
    //padding: 1rem;
    `;

export const HomeCardRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    width: 100%;
    height: 100%;
`;
export const HomeCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 215px;
    height: 314px;
    border-radius: 1rem;
`;
export const InfoCardStyled = styled(HomeCardStyled)`
    background-color: #ADD8E6;
    width: 377px; 
    height: 385px;
    margin: 10px;
    text-align: center;
    padding: 1em;
    cursor: default;
    justify-content: space-evenly;
    h2{
        color: white;
        font-size: 35px;
        font-weight: lighter;
        margin-bottom: 0.5em ;
    }
    
    `;

export const BlueSection = styled.div` // todo delete morans footer in login or replace this
    padding: 3% 0;
    width: 100%; 
    margin-top: 1rem;
    background-color: #ADD8E6;
    bottom: 0;
    ${HomeCardStyled}{
    border: 1px solid white;
        justify-content: space-between;
        text-align: center;
        padding: 10px 0;
        @media (max-width: 768px){
            width: 80%;
        }
    }
    ${HomeCardStyled}>h3{
        color: white;
        font-weight: lighter;
    }
    ${HomeCardStyled}>h1{
        color: white;
    }
    
    ${HomeCardRowStyled}{
        gap: 3vw;
    }
    `;
