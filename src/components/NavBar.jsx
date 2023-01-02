import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/NavBar.css';

// Context
import { UserContext } from '../context/UserContext';
import { UserActivitiesContext } from '../context/UserActivitesContext';

export const NavBar = () => {
    const userDetails = useContext(UserContext);
    const userActivites = useContext(UserActivitiesContext);
    const [firstname, setFirstName] = useState(userDetails.firstName);
    const navigate = useNavigate();

    useEffect(() => {
        setFirstName(userDetails.firstName);
    }, [userDetails.firstName]);

    const signOutUser = () => {
        userDetails.resetUserDetails();
        userActivites.deleteAllActivities();
        navigate('/');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow sticky-top">
                <div className="container-fluid nav-container">
                    <img className="brand-logo" src="img/common/Exercise Tracker Logo-4.png" alt="" />
                    <div className="activity-button">
                        <button className="nav-button" data-bs-toggle="modal" data-bs-target="#NewActivityModal">+ New Activity</button>
                    </div>

                    <div id='navbar-user' className="dropdown">
                        <span style={{ color: "white", fontWeight: "600" }}>{`Welcome, ${firstname}!`}</span>
                        <img src="img/home/default-avatar-icon-white-png.png" alt="" data-bs-toggle="dropdown" />

                        <ul className="dropdown-menu dropdown-menu-lg-end mt-2">
                            <li><span id='navbar-signout-item' className="dropdown-item" onClick={signOutUser}>Sign Out</span></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar;
