import React from 'react';
import {HomeImageCard} from '../../components/HomeImageCard/HomeImageCard';
import {HomeCardRowStyled, InfoCardStyled, BlueSection, HomeCardStyled, HomeWrapperStyled} from './Home.styled';
import {Button} from "../../components/Button/Button.jsx";

function Home(userDetails) {
    const Logout = () => {
        window.open(`http://localhost:3000/users/logout`, "_self");
    };
    return (
        <div>
            <HomeWrapperStyled>
                <h1>Home</h1>
                <HomeCardRowStyled>
                    <HomeImageCard image={'images/babyHand.jpeg'}/>
                    <InfoCardStyled>
                        <h2>Donate, fundraise and track your impact easily on our user friendly platform.</h2>
                        <Button text={'Get Started!'} isEmpty={true}/>

                    </InfoCardStyled>
                    <HomeImageCard image={'images/MadaPerson.png'}/>
                </HomeCardRowStyled>
                <BlueSection>
                    <HomeCardRowStyled>
                        <HomeCardStyled>
                            <h3>Donate Money</h3>
                            <h1>Help Those in Need</h1>
                            <Button text={'Donate Now!'} isEmpty={true}/>
                        </HomeCardStyled>
                        <HomeCardStyled>
                            <h3>Start Campaign</h3>
                            <h1>Raise Money for Any Cause</h1>
                            <Button text={'Start Fundraiser!'} isEmpty={true}/>
                        </HomeCardStyled>
                        <HomeCardStyled>
                            <h3>Donations</h3>
                            <h1>Discover Meaningful Campaigns</h1>
                            <Button text={'View Donations!'} isEmpty={true}/>
                        </HomeCardStyled>
                    </HomeCardRowStyled>
                </BlueSection>
            </HomeWrapperStyled>
        </div>
    );
}

export default Home;
