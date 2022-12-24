import React from 'react';
import { Link } from 'react-router-dom'; // temp for testing

import './css/SignIn.css';

const SignIn = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex  justify-content-center h-100 shadow  mb-5 bg-white rounded">
                    <div className="col-md-8 col-lg-7 col-xl-6 image-col">
                        <img src="img/signin/logimg.png" className="img-fluid" alt="Phone" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form-col">
                        {/* <form className="form"> */}
                            {/* Email input */}
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form1Example13">Email address</label>
                                <input type="email" id="form1Example13" className="form-control" />
                            </div>

                            {/* Password input */}
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form1Example23">Password</label>
                                <input type="password" id="form1Example23" className="form-control" />
                            </div>
                            {/* <!-- submitButton */}
                            <Link to={'/home'}>
                                <button type="submit" className="btn">Sign in</button>
                            </Link>

                            <div className="d-flex align-items-center mb-1">
                                <a href="#!">Forgot password?</a>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
