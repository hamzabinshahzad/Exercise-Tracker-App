import React from 'react';
import NavBar from './NavBar';
import NewActivityModal from './NewActivityModal';
import UpdateActivityModal from './UpdateActivityModal';
import ListActivities from './ListActivities';

import './css/Home.css';

// Provider
import { UserActivitesProvider } from '../context/UserActivitesContext';


const Home = () => {
    return (
        <UserActivitesProvider>
            <NavBar />
            <div className="container">
                <ListActivities />
            </div>

            <NewActivityModal />
            <UpdateActivityModal />
        </UserActivitesProvider>
    );
}

export default Home;