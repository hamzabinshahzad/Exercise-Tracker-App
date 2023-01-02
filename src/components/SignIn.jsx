import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // temp for testing

import './css/SignIn.css';
import setBodyColor from '../setBodyColor';

// Context
import { UserContext } from '../context/UserContext';

const SignIn = () => {
    setBodyColor({ color: "#263159" });
    const userDetails = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitSignin = (e) => {
        e.preventDefault();
        let credentials = {
            email,
            password
        }

        getUser(credentials);
        cleanupForm();
    }

    const cleanupForm = () => {
        setEmail("");
        setPassword("");
    }

    const getUser = async (credentials) => {
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(credentials)
        };

        try {
            let rawData = await fetch("http://127.0.0.1:5000/login", options);
            let resData = await rawData.json();
            alert("Sign In Successful!");
            userDetails.initializeUserDetails(resData);
            userDetails.setSignInStatus(true);
            navigate("/home");
        } catch (e) {
            alert("Sign In failed due to incorrect credentials or network error, please try again later.");
        } 
    }


    return (
        <div className="container py-5 h-100">
            <div id="sigin-main-row" className="row d-flex  justify-content-center  bg-white shadow">
                <div className="col-md-8 col-lg-7 col-xl-6 image-col">
                    <img src="img/signin/logimg.png" className="img-fluid" alt="Phone" />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form-col">
                    <img id='signin-logo' src="img/common/Exercise Tracker Logo-4-new-2-alt.png" alt="" />
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
