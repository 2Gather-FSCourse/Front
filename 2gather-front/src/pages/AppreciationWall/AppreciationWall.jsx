import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AppreciationWallContainer, CirclesContainer } from './AppreciationWall.style';
import Circle from '../../components/Circle/Circle';
import { getDonations } from '../../APIs/donations.api';
import { getUser } from '../../APIs/users.api';

const AppreciationWall = () => {
    const [topFive, setTopFive] = useState([]);

    useEffect(() => {
        async function fetchTopFive() {
            const result = await getDonations();
            let users = {};

            for (const donation of result.data) {
                if (!users[donation.userId]) {
                    users[donation.userId] = 0;
                }
                users[donation.userId] += donation.amount;
            }

            let usersArray = [];
            for (const userId in users) {
                usersArray.push({ userId, totalDonation: users[userId] });
            }

            usersArray.sort((a, b) => b.totalDonation - a.totalDonation);
            const topFiveId = usersArray.slice(0, 5).map(user => user.userId);


            const topFiveNames = await Promise.all(topFiveId.map(async userId => {
                const user = await getUser(userId);
                return user.data.name;
            }));
            setTopFive(topFiveNames);
        }
        if (topFive.length === 0)
            fetchTopFive();

        console.log(topFive);

    }, [topFive]);


    return (
        <AppreciationWallContainer>
            <PageTitle title="Donor Appreciation Wall" />
            <CirclesContainer>
                <Circle color={'#B5D4E6'} height={4.4} width={3.1} opacity={0.2} bottom={2}></Circle>
                <Circle color={'#B5D4E6'} height={5.1} width={3.6} opacity={0.65} top={4.8} right={3.4}></Circle>
                <Circle color={'#91DFEE'} height={5.8} width={4.1} opacity={0.38} right={5.5}></Circle>
                <Circle color={'#A594FF'} height={7.3} width={5.2} opacity={0.21} top={2.9} right={5.5}></Circle>
                <Circle color={'#85A0EE'} height={9.76} width={6.9} opacity={0.21} top={9.75} right={18.4}></Circle>
                <Circle color={'#91DFEE'} height={7.8} width={5.5} opacity={1} top={21.4} right={22.9}></Circle>
                <Circle color={'#D0F5F7'} height={6.8} width={4.8} opacity={0.4} top={3.9} right={22.2}></Circle>
                <Circle color={'#A594FF'} height={11.7} width={8.3} opacity={0.56} top={13} right={31.25}></Circle>
                <Circle color={'#D0F5F7'} height={11.7} width={8.3} opacity={1} top={6.8} right={31.9}></Circle>
                <Circle color={'#3DB2E2'} height={14.1} width={10} opacity={0.41} top={30} right={55}></Circle>
                <Circle color={'#5093E7'} height={14.6} width={10.4} opacity={1} top={10} right={43} name={topFive[4]}></Circle>
                <Circle color={'#B7E2E4'} height={24.4} width={17.3} opacity={1} bottom={17} left={20} name={topFive[3]}></Circle>
                <Circle color={'#3DB2E2'} height={21.9} width={15.6} opacity={1} top={7} right={5} name={topFive[2]}></Circle>
                <Circle color={'#90A8F0'} height={25.3} width={18} opacity={1} bottom={25} left={5} name={topFive[1]}></Circle>
                <Circle color={'#242D47'} height={34.1} width={24.3} opacity={1} top={3} right={23} name={topFive[0]}></Circle>
            </CirclesContainer>
        </AppreciationWallContainer>
    );
}

export default AppreciationWall;
