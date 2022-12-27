import React from 'react';
import NavBar from './NavBar';
import NewActivityModal from './NewActivityModal';
import UpdateActivityModal from './UpdateActivityModal';
import ListActivities from './ListActivities';

import './css/Home.css';
import setBodyColor from '../setBodyColor';

// Provider
import { UserActivitesProvider } from '../context/UserActivitesContext';


const Home = () => {
    setBodyColor({color: "#eee"});

    return (
        <UserActivitesProvider>
            {/* <section id='home-section' className='vh-100'> */}
                <NavBar />
                <div id='home-container' className="container">
                    <ListActivities />
                </div>
            {/* </section> */}

            <NewActivityModal />
            <UpdateActivityModal />
        </UserActivitesProvider>
    );
}

export default Home;