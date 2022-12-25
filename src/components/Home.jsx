import React from 'react';
import NavBar from './NavBar';
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
        </UserActivitesProvider>
    );
}

export default Home;