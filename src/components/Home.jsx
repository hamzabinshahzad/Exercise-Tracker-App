import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import NewActivityModal from './NewActivityModal';
import UpdateActivityModal from './UpdateActivityModal';
import ListActivities from './ListActivities';

import './css/Home.css';
import setBodyColor from '../setBodyColor';

// Context
import { UserContext } from '../context/UserContext';
import { UserActivitiesContext } from '../context/UserActivitesContext';


const Home = () => {
    setBodyColor({ color: "#eee" });

    const userDetails = useContext(UserContext);
    const userActivities = useContext(UserActivitiesContext);

    useEffect(() => {
        getActivities(userDetails.getUserId())
    }, []);

    const getActivities = async (userId) => {
        try {
            let rawData = await fetch(`http://127.0.0.1:5000/getactivities/?userid=${userId}`);
            let resData = await rawData.json();
            resData.forEach((activity) => userActivities.initializeNewActivity(activity));
            return true;
        } catch (e) {
            alert("Failed to get activities from the server due to a network error, please try again later.");
            console.log(e);
            return false;
        }
    }

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