import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 50px;
    margin-top: 2%;
`;

export const UpperProfileContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const LowerProfileContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 50px;
    margin-top: 2%;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #39CCE0;
    opacity: 0.2;
`;

export const ProfileName = styled.h1`
    font-size: 1.7em;
    font-weight: 500;
    margin-top: 15px;
`;

export const OrganizationName = styled.h4`
    font-size: 1.05em;
    font-weight: 400;
    color: #A0A0A0;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    border: 2px solid #ADD8E6;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    justify-content: center;
    align-items: center;
`;

export const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ADD8E6;
    width: 90px;
    height: 90px;
    position: relative;
    bottom: 70px;
`;

export const IconContainer = styled.img`
    width: 60px;
    height: 60px;
`;

export const ContainerTitle = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    position: relative;
    bottom: 45px;
`;

export const ContainerDesc = styled.p`
    font-size: 1em;
    text-align: center;
    position: relative;
    bottom: 30px;
`;
