import styled from 'styled-components';

export const CircleContainer = styled.div`
    margin: 1%;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};
    border-radius: 50%;
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    position: relative;
    ${props => props.left && `left: ${props.left}%;`}
    ${props => props.right && `right: ${props.right}%;`}
    ${props => props.top && `top: ${props.top}%;`}
    ${props => props.bottom && `bottom: ${props.bottom}%;`}
`;
