import React from 'react';
import { Link } from 'react-router-dom';

import './css/Landing.css';

const Landing = () => {
    return (
        <section className="vh-100 section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav id='navbar-landing' className="navbar navbar-expand-lg d-flex">
                            <a className="navbar-brand" href="#" style={{color: "white"}}>Exercise Tracker</a>
                            <div className="nav-button">
                                <Link to={'/signin'}>
                                    <button className="nav-login">Log In</button>
                                </Link>
                                <Link to={'/signup'}>
                                    <button className="nav-signup">Sign Up</button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="row d-flex  justify-content-around align-items-center h-100">
                    <div className="col-md-6 col-lg-6 col-xl-6 mt-5">
                        <div className="left-side">
                            <div>
                                <span className="text">“Once you are exercising regularly</span>
                            </div>
                            <div>
                                <span className="text" style={{marginLeft: "4px"}}>the hardest thing is to stop it.”</span>
                            </div>
                            <div className="links">
                                <a href="/login.html" className="btn">Get Started</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <div className="right-side">
                            <img src="img/landing/landing1.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
