import React from 'react';
import { useNavigate } from 'react-router-dom';
import {HomeImageCard} from '../../components/HomeImageCard/HomeImageCard';
import {HomeCardRowStyled, InfoCardStyled, BlueSection, HomeCardStyled, HomeWrapperStyled} from './Home.styled';
import {Button} from "../../components/Button/Button.jsx";


function Home(userDetails) {

    const navigate = useNavigate();
    const navigator = (path) => {
        navigate(path);
    }
    const Logout = () => {
        window.open(`http://localhost:3000/users/logout`, "_self");
    };
    return (
        <div>
            <HomeWrapperStyled>
                {/*<h1>Home</h1>*/}
                <HomeCardRowStyled>
                    <HomeImageCard image={'https://res.cloudinary.com/drnwhlaqk/image/upload/v1712577001/2Gether/assets/babyHand_j90mho.jpg'}/>
                    <InfoCardStyled>
                        <h2>Donate, fundraise and track your impact easily on our user friendly platform.</h2>
                        <Button text={'Get Started!'} onClick={() => navigator('/donations')} isEmpty={true}/>

                    </InfoCardStyled>
                    <HomeImageCard image={'images/MadaPerson.png'}/>
                </HomeCardRowStyled>
                <BlueSection>
                    <HomeCardRowStyled>
                        <HomeCardStyled>
                            <h3>Donate Money</h3>
                            <h1>Help Those in Need</h1>
                            <Button text={'Donate Now!'} onClick={() => navigator('/donate')} isEmpty={true}/>
                        </HomeCardStyled>
                        <HomeCardStyled>
                            <h3>Start Campaign</h3>
                            <h1>Raise Money for Any Cause</h1>
                            <Button text={'Start Fundraiser!'} onClick={() => navigator('/campaigns/form')} isEmpty={true}/>
                        </HomeCardStyled>
                        <HomeCardStyled>
                            <h3>Donations</h3>
                            <h1>Discover Meaningful Campaigns</h1>
                            <Button text={'Appreciation Wall'} onClick={() => navigator('/appreciationWall')} isEmpty={true}/>
                        </HomeCardStyled>
                    </HomeCardRowStyled>
                </BlueSection>
            </HomeWrapperStyled>
        </div>
    );
}

export default Home;
