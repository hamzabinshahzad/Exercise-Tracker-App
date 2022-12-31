import React from 'react';
import NavBar from './NavBar';
import NewActivityModal from './NewActivityModal';
import UpdateActivityModal from './UpdateActivityModal';
import ListActivities from './ListActivities';

import './css/Home.css';
import setBodyColor from '../setBodyColor';


const Home = () => {
    setBodyColor({ color: "#eee" });

    return (
        <>
            <NavBar />
            <div id='home-container' className="container">
                <ListActivities />
            </div>

            <NewActivityModal />
            <UpdateActivityModal />
        </>
    );
}

export default Home;