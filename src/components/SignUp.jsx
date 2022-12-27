import React from 'react';
import './css/SignUp.css';
import setBodyColor from '../setBodyColor';

const SignUp = () => {
    setBodyColor({color:"#263159"})
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div id='signup-main-row' className="row d-flex  justify-content-center h-100 shadow  mb-5 bg-white rounded">

                    <div className="col-md-8 col-lg-7 col-xl-6 image-col d-flex align-items-center">
                        <img src="img/signup/reg.png" className="img-fluid" alt="Phone " />
                    </div>

                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form-col d-flex align-items-center">
                        <form className="form needs-validation" novalidate>
                        <img id='signin-logo' src="img/common/Exercise Tracker Logo-4.png" alt="" />
                            {/* Name input */}
                            <div className="form-outline">
                                <label className="form-label" for="validationCustom01" >First Name</label>
                                <input type="text" id="validationCustom01" value="" className="form-control" maxlength="25" required />
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-outline">
                                <label className="form-label" for="form1Example13">Last Name</label>
                                <input type="text" id="form1Example13" className="form-control" maxlength="25" required />
                            </div>
                            <div className="form-outline">
                                <label className="form-label" for="form1Example13">Email address</label>
                                <input type="email" id="form1Example13" className="form-control" maxlength="25" required />

                            </div>

                            {/* Password input */}
                            <div className="form-outline">
                                <label className="form-label" for="form1Example23">Password</label>
                                <input type="password" id="form1Example23" className="form-control" maxlength="25" required />

                            </div>
                            <div className="form-outline">
                                <label className="form-label" for="form1Example23">Confirm Password</label>
                                <input type="password" id="form1Example23" className="form-control" maxlength="25" required />

                            </div>

                            {/* submitButton */}
                            <button type="submit" className="btn btn-outline-success">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;