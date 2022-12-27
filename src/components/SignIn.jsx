import React from 'react';
import { Link } from 'react-router-dom'; // temp for testing

import './css/SignIn.css';

import setBodyColor from '../setBodyColor';

const SignIn = () => {
    setBodyColor({color: "#263159"})

    return (
        
        
            <div className="container py-5 h-100">
                <div  id="sigin-main-row" className="row d-flex  justify-content-center  bg-white shadow">
                    <div className="col-md-8 col-lg-7 col-xl-6 image-col">
                        <img src="img/signin/logimg.png" className="img-fluid" alt="Phone" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form-col">
                        <img id='signin-logo' src="img/common/Exercise Tracker Logo-4.png" alt="" />
                        <form className="form">
                            {/* Email input */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="form1Example13">Email address</label>
                                <input type="email" id="form1Example13" className="form-control" />
                            </div>

                            {/* Password input */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="form1Example23">Password</label>
                                <input type="password" id="form1Example23" className="form-control mb-2" />
                            </div>
                            {/* <!-- submitButton */}
                            <div id='signin-button'>
                            <Link to={'/home'}>
                                <button type="submit" id='signin-button' className="btn btn-outline-success p-2">SIGN IN</button>
                            </Link>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        
    );
}

export default SignIn;
