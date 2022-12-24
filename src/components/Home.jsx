import React from 'react';
import NavBar from './NavBar';
import ListActivities from './ListActivities';

import './css/Home.css';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <ListActivities />
            </div>
        </>
    );
}

export default Home;