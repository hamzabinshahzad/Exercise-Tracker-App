import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // temp for testing

import './css/SignIn.css';
import setBodyColor from '../setBodyColor';


const SignIn = () => {
    setBodyColor({ color: "#263159" });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitSignin = (e) => {
        e.preventDefault();

    }

    return (
        <div className="container py-5 h-100">
            <div id="sigin-main-row" className="row d-flex  justify-content-center  bg-white shadow">
                <div className="col-md-8 col-lg-7 col-xl-6 image-col">
                    <img src="img/signin/logimg.png" className="img-fluid" alt="Phone" />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form-col">
                    <img id='signin-logo' src="img/common/Exercise Tracker Logo-4.png" alt="" />
                    <form className="form" onSubmit={submitSignin}>
                        {/* Email input */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="signin-emailInput">Email address</label>
                            <input type="email" id="signin-emailInput" value={email} className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        {/* Password input */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="signin-passwordInput">Password</label>
                            <input type="password" id="signin-passwordInput" value={password} className="form-control mb-2" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {/* <!-- submitButton */}
                        <div id='signin-button'>
                            {/* <Link to={'/home'}> */}
                                <button type="submit" id='signin-button' className="btn btn-outline-success p-2">SIGN IN</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
