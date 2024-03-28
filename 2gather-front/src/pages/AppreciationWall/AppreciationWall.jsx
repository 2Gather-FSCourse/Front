import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import {AppreciationWallContainer, CirclesContainer} from './AppreciationWall.style';
import Circle from '../../components/Circle/Circle';

const AppreciationWall = () => {
    return (
        <AppreciationWallContainer>
            <PageTitle title="Donor Appreciation Wall"/>
            <CirclesContainer>
                <Circle color={'#B5D4E6'} size={45} opacity={0.2}></Circle>
                <Circle color={'#B5D4E6'} size={53} opacity={0.65}></Circle>
                <Circle color={'#91DFEE'} size={60} opacity={0.38}></Circle>
                <Circle color={'#A594FF'} size={67} opacity={0.21}></Circle>
                <Circle color={'#85A0EE'} size={75} opacity={0.21}></Circle>
                <Circle color={'#91DFEE'} size={78} opacity={1}></Circle>
                <Circle color={'#D0F5F7'} size={85} opacity={0.4}></Circle>
                <Circle color={'#A594FF'} size={90} opacity={0.56}></Circle>
                <Circle color={'#D0F5F7'} size={105} opacity={1}></Circle>
                <Circle color={'#3DB2E2'} size={140} opacity={0.41}></Circle>
                <Circle color={'#5093E7'} size={160} opacity={1}></Circle>
                <Circle color={'#B7E2E4'} size={250} opacity={1}></Circle>
                <Circle color={'#3DB2E2'} size={225} opacity={1}></Circle>
                <Circle color={'#90A8F0'} size={260} opacity={1}></Circle>
                <Circle color={'#242D47'} size={275} opacity={1}></Circle>
            </CirclesContainer>
        </AppreciationWallContainer>
    );
}

export default AppreciationWall;
