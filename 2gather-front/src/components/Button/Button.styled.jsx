import styled from 'styled-components';

export const ButtonStyled = styled.button`
    // button gets an if empty prop, if true, the button will be colored differently
    background-color: ${(props) => (props.isEmpty ? '#FFFFFF' : '#ADD8E6')};
    border: ${(props) => (props.isEmpty ? '1px solid #ADD8E6' : '1px solid #FFFFFF')}; 
    color: ${(props) => (props.isEmpty ? '#ADD8E6' : '#FFFFFF')} ;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: 0.4s;
    &:hover {
        background-color: ${(props) => (props.isEmpty ? '#ADD8E6' : '#FFFFFF')};
        border: ${(props) => (props.isEmpty ? '1px solid #FFFFFF' : '1px solid #ADD8E6')};
        color: ${(props) => (props.isEmpty ? '#FFFFFF' : '#ADD8E6')} ;
    }
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
