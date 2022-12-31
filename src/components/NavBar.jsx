import React, { useContext } from 'react';
// import NewActivityModal from './NewActivityModal';

import './css/NavBar.css';

// Context
import { UserContext } from '../context/UserContext';

export const NavBar = () => {
    const userDetails = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow sticky-top">
                <div className="container-fluid nav-container">
                    <img className="brand-logo" src="img/common/Exercise Tracker Logo-4.png" alt="" />
                    <div className="activity-button">
                        <button className="nav-button" data-bs-toggle="modal" data-bs-target="#NewActivityModal">+ New Activity</button>
                    </div>
                    <div className="user">
                        <span style={{ color: "white", fontWeight: "600" }}>{`Welcome, ${userDetails.firstName}!`}</span>
                        <img src="img/home/default-avatar-icon-white-png.png" alt="" />
                    </div>
                </div>
            </nav>

            {/* <NewActivityModal /> */}
        </>
    );
}

export default NavBar;
