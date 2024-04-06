import styled from 'styled-components';

export const CircleContainer = styled.div`
    margin: 1%;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};
    border-radius: 50%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: relative;
`;
//#B5D4E6 0.21 100
