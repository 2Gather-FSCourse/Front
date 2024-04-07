import React from 'react';
import {HomeImageCard} from '../../components/HomeImageCard/HomeImageCard';
import {HomeCardRowStyled} from './Home.styled';
import {ButtonStyled} from "../../components/Button/Button.styled.jsx";
import {Button} from "../../components/Button/Button.jsx";
function Home(userDetails){
    const Logout = () => {
        window.open(`http://localhost:3000/users/logout`, "_self");
    };
    return(
        <div>
            <h1>Home</h1>
            <div>
                <h2>Welcome ${userDetails.name}</h2>
                <HomeCardRowStyled>
                <HomeImageCard image={'images/babyHand.jpeg'} />
                <HomeImageCard image={'images/MadaPerson.png'} />
                </HomeCardRowStyled>
            </div>
                <Button text={'Appreciation Wall'} isEmpty={true}/>
<button onClick={Logout}>Log Out</button>
        </div>
    );
}

export default Home;
