import React from 'react';

function Home(userDetails){
    const Logout = () => {
        window.open(`http://localhost:3000/users/logout`, "_self");
    };
    return(
        <div>
            <h1>Home</h1>
            <div>
                <h2>Welcome ${userDetails.name}</h2>
            </div>
<button onClick={Logout}>Log Out</button>
        </div>
    );
}

export default Home;
